"use client";

import { useState, useEffect, useRef } from "react";
import { 
  uploadDocument, fetchUsers, fetchDocuments, fetchAccessLogs, fetchLocalWebPresentations,
  grantAccess, revokeAccess, createUser, deleteUser, deleteDocument, updateUserPassword, registerWebDocument, renameDocument
} from "./actions";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Trash2, Key, Shield, ShieldOff, Search, FileText, Plus, ChevronDown, Pencil, Check, X } from "lucide-react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  
  // Data State
  const [users, setUsers] = useState<any[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [accessLogs, setAccessLogs] = useState<any[]>([]);
  const [localWebPresentations, setLocalWebPresentations] = useState<string[]>([]);

  // Add Document State
  const [showAddDoc, setShowAddDoc] = useState(false);
  const [file, setFile] = useState<File | string | null>(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("pdf");
  const [isUploading, setIsUploading] = useState(false);
  const [docMessage, setDocMessage] = useState("");
  const [globalDocSearch, setGlobalDocSearch] = useState("");
  const [globalDocFilter, setGlobalDocFilter] = useState("all");
  const [localWebDropdownOpen, setLocalWebDropdownOpen] = useState(false);
  const [localWebSearch, setLocalWebSearch] = useState("");

  // Rename State
  const [renamingDocId, setRenamingDocId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  // Add User State
  const [showAddUser, setShowAddUser] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState("viewer");
  const [userMessage, setUserMessage] = useState("");
  const [globalUserSearch, setGlobalUserSearch] = useState("");

  // Access Management State
  const [accessUser, setAccessUser] = useState("");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [accessUserSearch, setAccessUserSearch] = useState("");
  const [docSearch, setDocSearch] = useState("");
  const [docFilter, setDocFilter] = useState("all");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const localWebDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role !== "admin") {
      redirect("/dashboard");
    }
  }, [session, status]);

  useEffect(() => {
    if (session?.user?.role === "admin") {
      loadData();
    }
  }, [session]);

  // Handle clicking outside custom dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
      if (localWebDropdownRef.current && !localWebDropdownRef.current.contains(event.target as Node)) {
        setLocalWebDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef, localWebDropdownRef]);

  const loadData = async () => {
    try {
      setUsers(await fetchUsers());
      setDocuments(await fetchDocuments());
      setAccessLogs(await fetchAccessLogs());
      setLocalWebPresentations(await fetchLocalWebPresentations());
    } catch (e: any) {
      console.error(e);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    setDocMessage("");

    try {
      if (type === 'web') {
        const linkStr = file as string;
        if (!linkStr) throw new Error("Link is required.");
        const formData = new FormData();
        formData.append("title", title);
        formData.append("link", linkStr);
        await registerWebDocument(formData);
        setDocMessage("Web Presentation linked successfully!");
      } else {
        if (!file || typeof file === 'string') throw new Error("File is required.");
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("type", type);
        await uploadDocument(formData);
        setDocMessage("Document uploaded successfully!");
      }
      setFile(null);
      setTitle("");
      setShowAddDoc(false);
      loadData();
    } catch (e: any) {
      setDocMessage(e.message || "Operation failed.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserMessage("");
    const formData = new FormData();
    formData.append("username", newUsername);
    formData.append("password", newPassword);
    formData.append("role", newUserRole);

    try {
      await createUser(formData);
      setUserMessage("User created successfully!");
      setNewUsername("");
      setNewPassword("");
      setShowAddUser(false);
      loadData();
    } catch (e: any) {
      setUserMessage(e.message || "Failed to create user.");
    }
  };

  const handleChangePassword = async (userId: number, username: string) => {
    const newPass = prompt(`Enter new password for ${username}:`);
    if (!newPass) return;
    try {
      await updateUserPassword(userId, newPass);
      alert("Password updated successfully!");
    } catch (e: any) {
      alert("Failed to update password: " + e.message);
    }
  };

  const handleToggleAccess = async (documentId: string, hasAccess: boolean, accessRecordId?: number) => {
    if (!accessUser) return;
    try {
      if (hasAccess && accessRecordId) {
        await revokeAccess(accessRecordId);
      } else {
        await grantAccess(accessUser, documentId);
      }
      loadData();
    } catch (e: any) {
      alert("Failed to update access: " + e.message);
    }
  };

  const handleRenameStart = (doc: any) => {
    setRenamingDocId(doc.id);
    setRenameValue(doc.title);
  };

  const handleRenameConfirm = async () => {
    if (!renamingDocId) return;
    try {
      await renameDocument(renamingDocId, renameValue);
      setRenamingDocId(null);
      setRenameValue("");
      loadData();
    } catch (e: any) {
      alert("Failed to rename: " + e.message);
    }
  };

  const handleRenameCancel = () => {
    setRenamingDocId(null);
    setRenameValue("");
  };

  if (status === "loading" || session?.user?.role !== "admin") {
    return <div className="p-8 text-white">Loading Admin Dashboard...</div>;
  }

  // Filter lists
  const filteredUsers = users.filter(u => u.username.toLowerCase().includes(globalUserSearch.toLowerCase()));
  
  const filteredGlobalDocs = documents.filter(d => {
    const matchesSearch = d.title.toLowerCase().includes(globalDocSearch.toLowerCase());
    const matchesType = globalDocFilter === "all" || d.type.toLowerCase() === globalDocFilter;
    return matchesSearch && matchesType;
  });

  const filteredAccessDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(docSearch.toLowerCase());
    const matchesType = docFilter === "all" || doc.type.toLowerCase() === docFilter;
    return matchesSearch && matchesType;
  });

  const uniqueTypes = Array.from(new Set(documents.map(d => d.type.toLowerCase())));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex items-center justify-between border-b border-gray-800 pb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
            Admin Management
          </h1>
          <a href="/dashboard" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition border border-gray-700">
            Go to Dashboard
          </a>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* ======================= MANAGE USERS ======================= */}
          <section className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col h-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-purple-400">Manage Users</h2>
              <button onClick={() => setShowAddUser(!showAddUser)} className="flex items-center gap-1 text-sm bg-purple-600 hover:bg-purple-500 px-3 py-1.5 rounded transition">
                <Plus size={16} /> New User
              </button>
            </div>

            {/* Add User Form Dropdown */}
            {showAddUser && (
              <div className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <form onSubmit={handleCreateUser} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Username" required value={newUsername} onChange={e => setNewUsername(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white" />
                    <input type="text" placeholder="Password" required value={newPassword} onChange={e => setNewPassword(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white" />
                  </div>
                  <div className="flex gap-3">
                    <select value={newUserRole} onChange={e => setNewUserRole(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white w-1/2">
                      <option value="viewer">Viewer</option>
                      <option value="admin">Admin</option>
                    </select>
                    <button type="submit" className="w-1/2 py-2 bg-purple-600 hover:bg-purple-500 rounded transition font-semibold text-sm">Save User</button>
                  </div>
                  {userMessage && <div className="text-xs text-purple-400">{userMessage}</div>}
                </form>
              </div>
            )}

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input type="text" placeholder="Search users..." value={globalUserSearch} onChange={e => setGlobalUserSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white w-full focus:outline-none focus:border-purple-500" />
            </div>

            <div className="overflow-auto flex-1 rounded bg-gray-900/50 border border-gray-800">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="sticky top-0 bg-gray-900 shadow-sm z-10"><tr className="text-gray-400 border-b border-gray-700"><th className="py-3 px-4">Username</th><th className="py-3 px-4">Role</th><th className="py-3 px-4 text-right">Actions</th></tr></thead>
                <tbody>
                  {filteredUsers.map(u => (
                    <tr key={u.id} className="border-b border-gray-800/50 hover:bg-gray-800 transition">
                      <td className="py-3 px-4">{u.username}</td>
                      <td className="py-3 px-4 text-gray-400">{u.role}</td>
                      <td className="py-3 px-4 text-right">
                        <button title="Change Password" onClick={() => handleChangePassword(u.id, u.username)} className="text-yellow-400 hover:text-yellow-300 mr-4"><Key size={16} /></button>
                        <button title="Delete User" onClick={async () => { if(confirm(`Delete ${u.username}?`)) { await deleteUser(u.id); loadData(); } }} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ======================= MANAGE DOCUMENTS ======================= */}
          <section className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col h-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-sky-400">Manage Documents</h2>
              <button onClick={() => setShowAddDoc(!showAddDoc)} className="flex items-center gap-1 text-sm bg-sky-600 hover:bg-sky-500 px-3 py-1.5 rounded transition">
                <Plus size={16} /> Add Document
              </button>
            </div>

            {/* Add Document Form Dropdown */}
            {showAddDoc && (
              <div className="mb-4 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <form onSubmit={handleUpload} className="space-y-3">
                  <div className="flex gap-3">
                    <input type="text" placeholder="Title" required value={title} onChange={e => setTitle(e.target.value)} className="flex-1 bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white" />
                    <select value={type} onChange={e => setType(e.target.value)} className="w-1/3 bg-gray-800 border border-gray-700 rounded p-2 text-sm text-white">
                      <option value="pdf">PDF</option>
                      <option value="spreadsheet">Spreadsheet</option>
                      <option value="doc">Word</option>
                      <option value="docs">Docs (Any Format)</option>
                      <option value="web">Web Presentation</option>
                    </select>
                  </div>
                  
                  {type === 'web' ? (
                    <div ref={localWebDropdownRef}>
                      {/* Custom Searchable Dropdown for Web Presentations */}
                      <div className="relative">
                        <button 
                          type="button"
                          onClick={() => setLocalWebDropdownOpen(!localWebDropdownOpen)}
                          className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-left text-white text-sm focus:outline-none focus:border-sky-500 flex justify-between items-center"
                        >
                          <span className="truncate">
                            {file ? (file as string) : "-- Browse Local Presentations --"}
                          </span>
                          <ChevronDown size={16} className="text-gray-400 shrink-0 ml-2" />
                        </button>

                        {localWebDropdownOpen && (
                          <div className="absolute top-full mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                            <div className="p-2 border-b border-gray-800 bg-gray-900">
                              <div className="relative">
                                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                                <input
                                  type="text"
                                  autoFocus
                                  placeholder="Search folders..."
                                  value={localWebSearch}
                                  onChange={e => setLocalWebSearch(e.target.value)}
                                  className="pl-7 pr-2 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-white w-full focus:outline-none focus:border-sky-500"
                                />
                              </div>
                            </div>
                            <ul className="max-h-48 overflow-auto">
                              {localWebPresentations
                                .filter(f => f.toLowerCase().includes(localWebSearch.toLowerCase()))
                                .map(folder => {
                                  const route = `/view/${folder}`;
                                  const isAlreadyAdded = documents.some(d => d.type === 'web' && d.link === route);
                                  
                                  return (
                                    <li 
                                      key={folder}
                                      onClick={() => {
                                        if (isAlreadyAdded) return;
                                        setFile(route);
                                        if (!title) {
                                          const folderName = route.replace("/view/", "");
                                          setTitle(folderName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
                                        }
                                        setLocalWebDropdownOpen(false);
                                      }}
                                      className={`px-3 py-2 text-sm border-b border-gray-800/50 last:border-0 flex justify-between items-center ${isAlreadyAdded ? 'opacity-50 cursor-not-allowed bg-gray-900/50 text-gray-500' : 'cursor-pointer hover:bg-sky-900/40 text-gray-200'}`}
                                    >
                                      <span>{folder}</span>
                                      {isAlreadyAdded && <span className="text-xs uppercase text-gray-600">Added</span>}
                                    </li>
                                  );
                                })
                              }
                              {localWebPresentations.filter(f => f.toLowerCase().includes(localWebSearch.toLowerCase())).length === 0 && (
                                <li 
                                  className="px-3 py-4 text-sm text-sky-400 hover:text-sky-300 text-center cursor-pointer border-t border-gray-700"
                                  onClick={() => {
                                    const customRoute = `/view/${localWebSearch.trim()}`;
                                    setFile(customRoute);
                                    if (!title) {
                                      setTitle(localWebSearch.trim());
                                    }
                                    setLocalWebDropdownOpen(false);
                                  }}
                                >
                                  Use custom path: "{localWebSearch}"
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <input type="file" required onChange={e => setFile(e.target.files?.[0] || null)} className="w-full text-sm text-gray-400 file:mr-4 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-gray-700 file:text-white" />
                    </div>
                  )}

                  <button type="submit" disabled={isUploading} className="w-full py-2 bg-sky-600 hover:bg-sky-500 rounded disabled:opacity-50 transition text-sm font-semibold">
                    {isUploading ? "Processing..." : (type === 'web' ? "Link Web Presentation" : "Upload & Save")}
                  </button>
                  {docMessage && <div className="text-xs text-sky-400">{docMessage}</div>}
                </form>
              </div>
            )}

            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input type="text" placeholder="Search documents..." value={globalDocSearch} onChange={e => setGlobalDocSearch(e.target.value)} className="pl-9 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white w-full focus:outline-none focus:border-sky-500" />
              </div>
              <select
                value={globalDocFilter}
                onChange={e => setGlobalDocFilter(e.target.value)}
                className="px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 w-32"
              >
                <option value="all">All Types</option>
                {uniqueTypes.map((t) => (
                  <option key={t} value={t}>{t.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div className="overflow-auto flex-1 rounded bg-gray-900/50 border border-gray-800">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="sticky top-0 bg-gray-900 shadow-sm z-10"><tr className="text-gray-400 border-b border-gray-700"><th className="py-3 px-4">Title</th><th className="py-3 px-4">Type</th><th className="py-3 px-4 text-right">Actions</th></tr></thead>
                <tbody>
                  {filteredGlobalDocs.map(d => (
                    <tr key={d.id} className="border-b border-gray-800/50 hover:bg-gray-800 transition">
                      <td className="py-3 px-4 truncate max-w-[150px] lg:max-w-[200px]">
                        {renamingDocId === d.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={renameValue}
                              onChange={e => setRenameValue(e.target.value)}
                              onKeyDown={e => { if (e.key === 'Enter') handleRenameConfirm(); if (e.key === 'Escape') handleRenameCancel(); }}
                              autoFocus
                              className="bg-gray-900 border border-sky-500 rounded px-2 py-1 text-sm text-white w-full focus:outline-none"
                            />
                            <button title="Save" onClick={handleRenameConfirm} className="text-green-400 hover:text-green-300 shrink-0"><Check size={16} /></button>
                            <button title="Cancel" onClick={handleRenameCancel} className="text-gray-400 hover:text-gray-300 shrink-0"><X size={16} /></button>
                          </div>
                        ) : (
                          <span title={d.title}>{d.title}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-gray-400 uppercase text-xs tracking-wider">{d.type}</td>
                      <td className="py-3 px-4 text-right">
                        <button title="Rename Document" onClick={() => handleRenameStart(d)} className="text-sky-400 hover:text-sky-300 mr-3"><Pencil size={16} /></button>
                        <button title="Delete Document" onClick={async () => { if(confirm(`Delete ${d.title}?`)) { await deleteDocument(d.id); loadData(); } }} className="text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* ======================= ACCESS MANAGEMENT ======================= */}
        <section className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-teal-400 flex items-center gap-2">
                <Shield size={20} /> Manage Access
              </h2>
              <p className="text-gray-400 text-sm mt-1">Select a user to grant or revoke document access.</p>
            </div>
            
            <div className="w-full md:w-72" ref={dropdownRef}>
              <label className="block text-sm text-gray-400 mb-1">Select User</label>
              
              {/* Custom Searchable Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="w-full bg-gray-900 border border-teal-700/50 rounded-lg p-2.5 text-left text-white focus:outline-none focus:border-teal-500 flex justify-between items-center"
                >
                  <span>{accessUser || "-- Choose User --"}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute top-full mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="p-2 border-b border-gray-700 bg-gray-900">
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                        <input
                          type="text"
                          autoFocus
                          placeholder="Search users..."
                          value={accessUserSearch}
                          onChange={e => setAccessUserSearch(e.target.value)}
                          className="pl-7 pr-2 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-white w-full focus:outline-none focus:border-teal-500"
                        />
                      </div>
                    </div>
                    <ul className="max-h-48 overflow-auto">
                      {users
                        .filter(u => u.username.toLowerCase().includes(accessUserSearch.toLowerCase()))
                        .map(u => (
                          <li 
                            key={u.id}
                            onClick={() => {
                              setAccessUser(u.username);
                              setUserDropdownOpen(false);
                            }}
                            className="px-3 py-2 text-sm text-gray-200 hover:bg-teal-900/40 cursor-pointer border-b border-gray-700/50 last:border-0 flex justify-between"
                          >
                            <span>{u.username}</span>
                            <span className="text-xs text-gray-500 uppercase">{u.role}</span>
                          </li>
                        ))
                      }
                      {users.filter(u => u.username.toLowerCase().includes(accessUserSearch.toLowerCase())).length === 0 && (
                        <li className="px-3 py-4 text-sm text-gray-500 text-center">No users found.</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {accessUser ? (
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900/30">
              {/* Document Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white w-full focus:outline-none focus:border-teal-500"
                  />
                </div>
                <select
                  value={docFilter}
                  onChange={(e) => setDocFilter(e.target.value)}
                  className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white focus:outline-none focus:border-teal-500 sm:w-48"
                >
                  <option value="all">All Types</option>
                  {uniqueTypes.map((t) => (
                    <option key={t} value={t}>{t.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              {/* Document Access List */}
              <div className="overflow-auto max-h-96 rounded border border-gray-800">
                {filteredAccessDocs.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No documents match your search.</p>
                ) : (
                  <table className="w-full text-left text-sm">
                    <thead className="sticky top-0 bg-gray-900">
                      <tr className="text-gray-400 border-b border-gray-700">
                        <th className="pb-3 pt-3 pl-4">Document</th>
                        <th className="pb-3 pt-3">Type</th>
                        <th className="pb-3 pt-3 text-center">Status</th>
                        <th className="pb-3 pt-3 text-right pr-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAccessDocs.map(doc => {
                        const accessRecord = accessLogs.find(a => a.username === accessUser && a.document_id === doc.id);
                        const hasAccess = !!accessRecord;

                        return (
                          <tr key={doc.id} className={`border-b border-gray-800 hover:bg-gray-800/80 transition-colors ${hasAccess ? 'bg-teal-900/5' : ''}`}>
                            <td className="py-3 pl-4 font-medium">
                              <div className="flex items-center gap-2">
                                <FileText size={14} className={hasAccess ? 'text-teal-400' : 'text-gray-600'} />
                                <span className={hasAccess ? 'text-teal-50' : 'text-gray-400'}>{doc.title}</span>
                              </div>
                            </td>
                            <td className="py-3 text-gray-500 text-xs uppercase tracking-wider">{doc.type}</td>
                            <td className="py-3 text-center">
                              {hasAccess ? (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                                  <Shield size={12} /> Granted
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                                  <ShieldOff size={12} /> No Access
                                </span>
                              )}
                            </td>
                            <td className="py-3 text-right pr-4">
                              {hasAccess ? (
                                <button 
                                  onClick={() => handleToggleAccess(doc.id, true, accessRecord.id)}
                                  className="px-3 py-1 bg-red-900/30 text-red-400 hover:bg-red-900/50 rounded text-xs transition border border-red-900/50"
                                >
                                  Revoke
                                </button>
                              ) : (
                                <button 
                                  onClick={() => handleToggleAccess(doc.id, false)}
                                  className="px-3 py-1 bg-teal-600 text-white hover:bg-teal-500 rounded text-xs transition"
                                >
                                  Grant Access
                                </button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border border-gray-700 border-dashed rounded-lg bg-gray-900/30">
              <Shield className="mx-auto text-gray-600 mb-3" size={32} />
              <p className="text-gray-400">Select a user above to manage their document access.</p>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

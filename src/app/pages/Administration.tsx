import { Plus, Search, UserCog } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";

const users = [
  {
    name: "System Admin",
    email: "admin@cad.local",
    role: "Administrator",
    assignment: "— No unit —",
    roleColor: "bg-purple-600",
  },
  {
    name: "bilal",
    email: "bilal@giga.com",
    role: "Officer",
    assignment: "— No unit —",
    roleColor: "bg-green-600",
  },
  {
    name: "kaleem",
    email: "kaleem@giga.com",
    role: "Officer",
    assignment: "VAN-1",
    roleColor: "bg-green-600",
  },
  {
    name: "zameer",
    email: "zameer@giga.com",
    role: "Dispatcher",
    assignment: "Alpha-2",
    roleColor: "bg-blue-600",
  },
];

const roles = [
  {
    name: "Administrator",
    description: "Full access: users, roles, districts, stations, and all modules.",
    color: "bg-purple-600",
  },
  {
    name: "Dispatcher",
    description: "Dispatch console, complaints, incidents, unit assignment, map.",
    color: "bg-blue-600",
  },
  {
    name: "Officer",
    description: "Field operations, view assignments and update status.",
    color: "bg-green-600",
  },
  {
    name: "Command",
    description: "Overview and reporting: dashboards and analytics.",
    color: "bg-amber-600",
  },
];

export function Administration() {
  return (
    <div className="h-full bg-slate-950 overflow-auto">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900 sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-semibold text-white">Administration</h1>
          <p className="text-sm text-slate-400">System configuration and user management</p>
        </div>
      </header>

      <div className="p-6">
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="bg-slate-900 border border-slate-800">
            <TabsTrigger value="users">Users & Roles</TabsTrigger>
            <TabsTrigger value="structure">Operational Structure</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            {/* Roles Info */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">User Roles — What Each Can Do</h2>
              <div className="grid grid-cols-2 gap-4">
                {roles.map((role) => (
                  <div key={role.name} className="flex items-start gap-3">
                    <div className={`${role.color} px-3 py-1 rounded text-xs font-medium text-white mt-0.5`}>
                      {role.name}
                    </div>
                    <p className="text-sm text-slate-400 flex-1">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New User */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Add New User</h2>
              <p className="text-sm text-slate-400 mb-6">
                Create an account so someone can log in. They can change their password after first login if
                you add a "change password" flow.
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname" className="text-slate-300">Full name</Label>
                  <Input
                    id="fullname"
                    placeholder="e.g. Ahmed Khan"
                    className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email (login)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@cad.local"
                    className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300">Password (min 8 characters)</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-300">Role</Label>
                  <Select defaultValue="officer">
                    <SelectTrigger id="role" className="bg-slate-950 border-slate-800 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="dispatcher">Dispatcher</SelectItem>
                      <SelectItem value="officer">Officer</SelectItem>
                      <SelectItem value="command">Command</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </div>

            {/* All Users */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">All Users</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search users..."
                    className="pl-9 w-64 bg-slate-950 border-slate-800 text-white placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-950 text-xs text-slate-400 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-left">Name</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-left">Role</th>
                      <th className="px-4 py-3 text-left">Change Role</th>
                      <th className="px-4 py-3 text-left">Assign Unit (MDT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {users.map((user) => (
                      <tr key={user.email} className="hover:bg-slate-800/50 transition-colors">
                        <td className="px-4 py-3 text-sm text-white">{user.name}</td>
                        <td className="px-4 py-3 text-sm text-slate-400">{user.email}</td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className={`border-${user.roleColor.split('-')[1]}-500 text-${user.roleColor.split('-')[1]}-400`}>
                            {user.role}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Select defaultValue={user.role.toLowerCase()}>
                            <SelectTrigger className="w-40 bg-slate-950 border-slate-800 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="administrator">Administrator</SelectItem>
                              <SelectItem value="dispatcher">Dispatcher</SelectItem>
                              <SelectItem value="officer">Officer</SelectItem>
                              <SelectItem value="command">Command</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="px-4 py-3">
                          <Select defaultValue={user.assignment}>
                            <SelectTrigger className="w-40 bg-slate-950 border-slate-800 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="— No unit —">— No unit —</SelectItem>
                              <SelectItem value="Alpha-1">Alpha-1</SelectItem>
                              <SelectItem value="Alpha-2">Alpha-2</SelectItem>
                              <SelectItem value="Bravo-1">Bravo-1</SelectItem>
                              <SelectItem value="Charlie-1">Charlie-1</SelectItem>
                              <SelectItem value="VAN-1">VAN-1</SelectItem>
                            </SelectContent>
                          </Select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="structure">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCog className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-semibold text-white">Operational Structure</h2>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Configure districts, stations, and organizational hierarchy for your CAD system.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="text-sm font-medium text-white mb-2">Districts</h3>
                  <p className="text-xs text-slate-500">Define geographical districts for dispatch routing</p>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="text-sm font-medium text-white mb-2">Stations</h3>
                  <p className="text-xs text-slate-500">Manage police stations and their assignments</p>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
                  <h3 className="text-sm font-medium text-white mb-2">Units</h3>
                  <p className="text-xs text-slate-500">Configure patrol units and call signs</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

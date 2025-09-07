import React, { useState } from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram, Trophy, Gamepad2, Plus, Trash2 } from "lucide-react";

export default function IshanGamingSite() {
  const [rooms, setRooms] = useState([
    { id: "12345", password: "opishan1", status: "Active" },
    { id: "67890", password: "opishan2", status: "Upcoming" },
  ]);

  const [tournament, setTournament] = useState(
    "Stay tuned for upcoming Free Fire tournaments hosted by OP Ishan Gaming!"
  );
  const [adminMode, setAdminMode] = useState(false);
  const [newRoom, setNewRoom] = useState({ id: "", password: "", status: "Active" });

  const addRoom = () => {
    if (newRoom.id && newRoom.password) {
      setRooms([...rooms, newRoom]);
      setNewRoom({ id: "", password: "", status: "Active" });
    }
  };

  const deleteRoom = (index) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg">🔥 Ishan Sarkar</h1>
        <p className="text-lg mt-2 text-gray-300">Professional Free Fire Player</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://youtube.com/@opishangaminglive22" target="_blank" rel="noreferrer">
            <button className="bg-red-600 hover:bg-red-700 flex gap-2 p-2 rounded">
              <Youtube className="w-5 h-5" /> YouTube
            </button>
          </a>
          <a href="https://instagram.com/opishangaming" target="_blank" rel="noreferrer">
            <button className="bg-pink-600 hover:bg-pink-700 flex gap-2 p-2 rounded">
              <Instagram className="w-5 h-5" /> Instagram
            </button>
          </a>
        </div>
        <button
          onClick={() => setAdminMode(!adminMode)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          {adminMode ? "Exit Admin Panel" : "Enter Admin Panel"}
        </button>
      </motion.div>

      {/* Custom Rooms */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Gamepad2 className="w-7 h-7 text-yellow-400" /> Custom Rooms
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg p-6">
              <p><span className="font-semibold">Room ID:</span> {room.id}</p>
              <p><span className="font-semibold">Password:</span> {room.password}</p>
              <p className="mt-2 text-sm text-gray-400">Status: {room.status}</p>
              {adminMode && (
                <button onClick={() => deleteRoom(index)} className="mt-4 bg-red-700 hover:bg-red-800 p-2 rounded flex gap-2">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              )}
            </div>
          ))}
        </div>

        {adminMode && (
          <div className="mt-6 bg-gray-900 p-6 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Add New Room</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <input type="text" placeholder="Room ID" value={newRoom.id} onChange={(e) => setNewRoom({ ...newRoom, id: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-600" />
              <input type="text" placeholder="Password" value={newRoom.password} onChange={(e) => setNewRoom({ ...newRoom, password: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-600" />
              <select value={newRoom.status} onChange={(e) => setNewRoom({ ...newRoom, status: e.target.value })} className="p-2 rounded bg-gray-800 border border-gray-600">
                <option>Active</option>
                <option>Upcoming</option>
                <option>Closed</option>
              </select>
            </div>
            <button onClick={addRoom} className="mt-4 bg-green-600 hover:bg-green-700 flex gap-2 p-2 rounded">
              <Plus className="w-5 h-5" /> Add Room
            </button>
          </div>
        )}
      </motion.div>

      {/* Tournament Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="w-7 h-7 text-green-400" /> Tournaments
        </h2>
        <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-lg p-6">
          {adminMode ? (
            <textarea value={tournament} onChange={(e) => setTournament(e.target.value)} className="w-full p-3 rounded bg-gray-900 border border-gray-600 text-white" />
          ) : (
            <p className="text-lg">{tournament}</p>
          )}
          <p className="mt-2 text-gray-400 text-sm">Room details & prizes will be updated here.</p>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Head from "next/head";
import Sidebar from "./(components)/Sidebar.jsx";
import Header from "./(components)/Header.jsx";
import UserTable from "./(components)/UserTable.jsx";
import StaffTable from "./(components)/StuffTable.jsx";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-900">
      <Head>
        <title>Qtap Dashboard</title>
        <meta name="description" content="User management dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto py-4 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <UserTable />
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <StaffTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

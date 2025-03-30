"use client";
import { AppShell, MantineProvider, Input, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FaOpencart, FaCarAlt, FaCarCrash } from "react-icons/fa";
import "./globals.css";
import { GiCarWheel } from "react-icons/gi";
import { FaCarOn } from "react-icons/fa6";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const menuItems = [
    { id: "brand", label: "برند خودرو", icon: <FaCarAlt size={25} /> },
    { id: "consumables", label: "لوازم مصرفی", icon: <GiCarWheel size={25} /> },
    { id: "accessories", label: "اکسسوری خودرو", icon: <FaCarOn size={25} /> },
    { id: "bodyParts", label: "قطعات بدنه", icon: <FaCarCrash size={25} /> },
  ];

  return (
    <html lang="fa" dir="rtl">
      <body>
        <MantineProvider theme={{}}>
          <AppShell
            style={{ backgroundColor: "#EEEEEE" }}
            navbar={{
              width: 250,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            padding="md"
            header={{ height: 60 }}
          >
            <AppShell.Header
              style={{
                backgroundColor: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 1rem",
                marginRight: "18rem",
                borderRadius: "0 0 20px 20px",
                maxWidth: "75rem",
                height: "5rem",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Input
                radius="md"
                variant="filled"
                placeholder="جستجو..."
                style={{
                  width: "100%",
                  maxWidth: "50rem", 
                  padding: "0.5rem 1rem", 
                }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1rem", fontWeight: "bold", color: "#333" }}>
                    نام کاربر
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "#666" }}>
                    مدیر سایت
                  </span>
                </div>
                <Avatar variant="light" radius="xl" size="lg" color="orange" />
              </div>
            </AppShell.Header>

           
            <AppShell.Navbar
              p="md"
              style={{
                backgroundColor: "#FF7517",
                height: "100vh",
                top: 0,
                position: "fixed",
                width: "250px",
                padding: "1rem",
                borderRadius: "30px 0 0 30px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <FaOpencart size={40} color="white" />
                <h2 style={{ color: "white" }}>OTOZARRIN</h2>
              </div>
              <ul style={{ marginTop: "3rem", listStyle: "none", padding: 0 }}>
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: ".5rem",
                      color: selectedItem === item.id ? "#FF7517" : "#FFFFFF",
                      backgroundColor: selectedItem === item.id ? "#FFFFFF" : "transparent",
                      padding: "0.7rem 1rem",
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

"use client";
import {
  AppShell,
  MantineProvider,
  Input,
  Avatar,
  Grid,
  Group,
  Burger,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FaOpencart, FaCarAlt, FaCarCrash } from "react-icons/fa";
import "./globals.css";
import { GiCarWheel } from "react-icons/gi";
import { FaCarOn } from "react-icons/fa6";
import { RiHomeSmile2Fill } from "react-icons/ri";
import "@mantine/core/styles.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const menuItems = [
    { id: "home", label: "خانه", icon: <RiHomeSmile2Fill size={25} /> },
    { id: "brand", label: "برند خودرو", icon: <FaCarAlt size={25} /> },
    { id: "consumables", label: "لوازم مصرفی", icon: <GiCarWheel size={25} /> },
    { id: "accessories", label: "اکسسوری خودرو", icon: <FaCarOn size={25} /> },
    { id: "bodyParts", label: "قطعات بدنه", icon: <FaCarCrash size={25} /> },
  ];

  return (
    <html lang="fa" dir="rtl">
      <body>
        <MantineProvider>
          <AppShell
            style={{
              backgroundColor: "#EEEEEE",
              display: "grid",
              gridTemplateColumns: "250px 1fr",
              gridTemplateRows: "auto 1fr",
              height: "100vh",
            }}
            padding="md"
            layout="alt"
            header={{ height: 60 }}
            footer={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !opened },
            }}
            aside={{
              width: 300,
              breakpoint: "md",
              collapsed: { desktop: false, mobile: true },
            }}
          >
            <AppShell.Header
            style={{height:"5rem", marginRight:"3rem" , borderRadius:"0 0 20px 20px "}}>
              <Group h="100%" px="lg">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Input style={{width:"40rem"}} placeholder="Input component" />
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md" style={{ backgroundColor: "#EB5B00" }}>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <FaOpencart size={40} color="white" />
                  <h2 style={{ color: "white" }}>OTOZARRIN</h2>
                </div>
                <ul
                  style={{ marginTop: "3rem", listStyle: "none", padding: 0 }}
                >
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => setSelectedItem(item.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        color: selectedItem === item.id ? "#FF7517" : "#FFFFFF",
                        backgroundColor:
                          selectedItem === item.id ? "#FFFFFF" : "transparent",
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
              </div>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

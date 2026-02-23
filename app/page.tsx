"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Home() {
  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/yarbu-me", color: "#333" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/", color: "#1DA1F2" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "#0077B5" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ya6bu", color: "#E1306C" },
  ]
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-sans">
      <Card className="w-full max-w-md">
        <CardHeader className="flex items-center justify-center">
          <Avatar className="w-32 h-32 shadow-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-0.5">
            <AvatarImage src="https://i.pinimg.com/564x/d1/2c/b4/d12cb4e72952c53a55eb8b6dad674a18.jpg" className="rounded-full" />
            <AvatarFallback>Yarbu</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-center">Yarbu</CardTitle>
          <CardDescription className="text-center">Connect with me:</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {socialLinks.map((link) => (

            <Button
              key={link.name}
              variant="outline"
              className="w-full text-lg py-6 text-white hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => window.open(link.url, "_blank")}
              style={{ backgroundColor: link.color }}
            >
              <span className="flex items-center text-start justify-start">
                <link.icon className="mr-2 h-6 w-6" />
                {link.name}</span>
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>

  )
}

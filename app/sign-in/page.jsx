"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ChevronRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex items-center justify-center flex-grow py-16">
        <Card className="w-full max-w-md mx-4 shadow-xl border-gray-200">
          <CardHeader className="text-center p-6 sm:p-8">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-500 mt-2">
              Sign in to your StatementPro account to continue.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 transition-colors focus:border-purple-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-10 transition-colors focus:border-purple-500"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-purple-600 text-white font-semibold text-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Sign In
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 text-center text-sm">
              <span className="text-gray-500">Don't have an account? </span>
              <Link
                href="/signup"
                className="text-purple-600 hover:text-purple-700 font-medium hover:underline transition-colors"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;

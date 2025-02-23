import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI-Powered Personalized Learning
      </motion.h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Unlock tailored learning paths in Data Science, AI, and Competitive Programming.
      </p>
      
      <Card className="w-full max-w-md p-4 bg-white shadow-lg rounded-2xl">
        <CardContent>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <Input
                type="email"
                placeholder="Enter your email to join the waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-3 border border-gray-300 rounded-xl"
              />
              <Button type="submit" className="bg-blue-600 text-white p-3 rounded-xl">
                Join the Waitlist
              </Button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold text-center">
              Thank you for signing up! Stay tuned for updates.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '63bde66b-6e28-4463-85e5-c7275a70e091');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', 'SangamSpace Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully! ✨",
          description: "Thank you for reaching out. We'll get back to you soon via email.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="w-full py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-blue/5 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-neon-purple/5 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-20 h-20 rounded-full bg-neon-orange/5 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-red bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about Sangam Space? Want to collaborate or need support? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="border-neon-blue/20 shadow-glow hover:shadow-neon transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 hover:from-neon-blue/20 hover:to-neon-purple/20 transition-all duration-300">
                  <div className="p-3 rounded-full bg-neon-blue/20">
                    <MapPin className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Prayagraj, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-neon-purple/10 to-neon-orange/10 hover:from-neon-purple/20 hover:to-neon-orange/20 transition-all duration-300">
                  <div className="p-3 rounded-full bg-neon-purple/20">
                    <Mail className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">hello@sangamspace.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-neon-orange/10 to-neon-red/10 hover:from-neon-orange/20 hover:to-neon-red/20 transition-all duration-300">
                  <div className="p-3 rounded-full bg-neon-orange/20">
                    <Phone className="w-6 h-6 text-neon-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+91 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="border-neon-purple/20 shadow-glow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading mb-4 text-center">Join Our Community</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-neon-blue/10 to-neon-purple/10">
                    <div className="text-2xl font-bold text-neon-blue">500+</div>
                    <div className="text-sm text-muted-foreground">Events Hosted</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-neon-purple/10 to-neon-orange/10">
                    <div className="text-2xl font-bold text-neon-purple">50+</div>
                    <div className="text-sm text-muted-foreground">Active Clubs</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-neon-orange/10 to-neon-red/10">
                    <div className="text-2xl font-bold text-neon-orange">10K+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-br from-neon-red/10 to-neon-blue/10">
                    <div className="text-2xl font-bold text-neon-red">25+</div>
                    <div className="text-sm text-muted-foreground">Colleges</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-neon-orange/20 shadow-glow hover:shadow-neon transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-neon-blue/30 focus:border-neon-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-neon-purple/30 focus:border-neon-purple"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-neon-orange/30 focus:border-neon-orange"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      required
                      rows={5}
                      className="border-neon-red/30 focus:border-neon-red resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-orange hover:from-neon-purple hover:via-neon-orange hover:to-neon-red text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

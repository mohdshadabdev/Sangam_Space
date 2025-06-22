
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Users, CheckCircle, XCircle, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// Mock data for demonstration
const mockEventRequests = [
  {
    id: 1,
    title: "Tech Workshop 2024",
    organizer: "John Doe",
    email: "john@example.com",
    date: "2024-02-15",
    time: "14:00",
    venue: "Main Auditorium",
    description: "A comprehensive workshop on latest tech trends",
    status: "pending",
    submittedAt: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Cultural Fest",
    organizer: "Jane Smith",
    email: "jane@example.com",
    date: "2024-03-01",
    time: "18:00",
    venue: "Campus Ground",
    description: "Annual cultural celebration with performances",
    status: "approved",
    submittedAt: "2024-01-10T15:45:00Z"
  }
];

const mockLiveEvents = [
  {
    id: 1,
    title: "Spring Fest 2024",
    date: "2024-02-20",
    venue: "Main Campus",
    rsvpCount: 145
  },
  {
    id: 2,
    title: "Coding Competition",
    date: "2024-02-25",
    venue: "Tech Lab",
    rsvpCount: 67
  },
  {
    id: 3,
    title: "Music Concert",
    date: "2024-03-05",
    venue: "Auditorium",
    rsvpCount: 203
  }
];

const Admin = () => {
  const [eventRequests, setEventRequests] = useState(mockEventRequests);
  const [liveEvents] = useState(mockLiveEvents);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const { toast } = useToast();

  // Check if user is authenticated as admin
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isAdminLoggedIn) {
      window.location.href = '/';
      return;
    }
  }, []);

  const handleApprove = (id: number) => {
    setEventRequests(prev => 
      prev.map(req => 
        req.id === id ? { ...req, status: 'approved' } : req
      )
    );
    toast({
      title: "Event Approved",
      description: "The event request has been approved successfully.",
    });
  };

  const handleReject = (id: number) => {
    setEventRequests(prev => 
      prev.map(req => 
        req.id === id ? { ...req, status: 'rejected' } : req
      )
    );
    toast({
      title: "Event Rejected",
      description: "The event request has been rejected.",
      variant: "destructive"
    });
  };

  const handleDelete = (id: number) => {
    setEventRequests(prev => prev.filter(req => req.id !== id));
    toast({
      title: "Request Deleted",
      description: "The event request has been deleted.",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>;
      case 'approved':
        return <Badge variant="outline" className="text-green-600 border-green-600">Approved</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="text-red-600 border-red-600">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const totalRSVPs = liveEvents.reduce((sum, event) => sum + event.rsvpCount, 0);
  const pendingRequests = eventRequests.filter(req => req.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage event requests and monitor RSVP statistics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-neon-blue/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-blue">{pendingRequests}</div>
            </CardContent>
          </Card>
          
          <Card className="border-neon-purple/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-purple">{liveEvents.length}</div>
            </CardContent>
          </Card>
          
          <Card className="border-neon-orange/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total RSVPs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-orange">{totalRSVPs}</div>
            </CardContent>
          </Card>
          
          <Card className="border-neon-red/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg RSVPs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neon-red">
                {liveEvents.length > 0 ? Math.round(totalRSVPs / liveEvents.length) : 0}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="requests">Event Requests</TabsTrigger>
            <TabsTrigger value="events">Live Events & RSVPs</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Organization Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eventRequests.map((request) => (
                    <Card key={request.id} className="border-l-4 border-l-neon-blue/50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{request.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                              <div><strong>Organizer:</strong> {request.organizer}</div>
                              <div><strong>Email:</strong> {request.email}</div>
                              <div><strong>Date:</strong> {request.date}</div>
                              <div><strong>Time:</strong> {request.time}</div>
                              <div><strong>Venue:</strong> {request.venue}</div>
                              <div><strong>Submitted:</strong> {new Date(request.submittedAt).toLocaleDateString()}</div>
                            </div>
                            <div className="mt-3">
                              <strong>Description:</strong>
                              <p className="text-sm text-muted-foreground mt-1">{request.description}</p>
                            </div>
                          </div>
                          <div className="ml-4">
                            {getStatusBadge(request.status)}
                          </div>
                        </div>
                        
                        <div className="flex gap-2 pt-4 border-t">
                          {request.status === 'pending' && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleApprove(request.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleReject(request.id)}
                              >
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(request.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {eventRequests.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No event requests found.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Events & RSVP Count</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {liveEvents.map((event) => (
                    <Card key={event.id} className="border-l-4 border-l-neon-purple/50">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {event.date}
                              </div>
                              <div>{event.venue}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-2xl font-bold text-neon-purple">
                              <Users className="w-6 h-6" />
                              {event.rsvpCount}
                            </div>
                            <div className="text-sm text-muted-foreground">RSVPs</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {liveEvents.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No live events found.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;

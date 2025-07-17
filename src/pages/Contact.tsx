import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Calendar, Download, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could add logic to send the form data to an API or email service
    setTimeout(() => {
      setModalOpen(false);
      setSubmitted(false);
      setForm({ name: '', contact: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a2233]">
            <span className="bg-clip-text text-transparent">Let's Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn data into decisions? Let's discuss how we can create impact together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:ns2330@rit.edu" className="hover:underline text-black dark:text-white">ns2330@rit.edu</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>New York, NY</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Actively Seeking Full-Time Opportunities</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Connect on Social</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/Nikhil-Surya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="http://www.linkedin.com/in/nikhilsuryawanshi" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <Button className="w-full bg-black text-white hover:bg-neutral-900" onClick={() => setResumeOpen(true)}>
                  <Download className="h-4 w-4 mr-2" />
                  View Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* What I'm Looking For */}
          <Card>
            <CardHeader>
              <CardTitle>What I'm Looking For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Ideal Opportunities</h4>
                <div className="space-y-2">
                  <Badge className="bg-[#cbd0ff] text-black font-normal border-none shadow-none">Data Analyst</Badge>
                  <Badge className="bg-[#cbd0ff] text-black font-normal border-none shadow-none">Data Engineer</Badge>
                  <Badge className="bg-[#cbd0ff] text-black font-normal border-none shadow-none">Financial Analyst</Badge>
                  <Badge className="bg-[#cbd0ff] text-black font-normal border-none shadow-none">Data Scientist</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Industries of Interest</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Financial Services</li>
                  <li>• Healthcare Analytics</li>
                  <li>• E-commerce & Retail</li>
                  <li>• Technology & Software</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">What I Bring</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Data engineering expertise (ETL/ELT, pipeline optimization, AWS, SQL)</li>
                  <li>• ML, GenAI, and LLM experience for modeling, predictions, and automation</li>
                  <li>• Executive-level insight delivery & stakeholder storytelling</li>
                  <li>• Strong technical foundation (Python, SQL, Power BI, Snowflake)</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond to messages within 24 hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Make Data-Driven Decisions?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking for a data analyst, need consultation on analytics strategy, 
                or want to discuss AI ethics, I'd love to hear from you.
              </p>
              <Button size="lg" className="bg-black text-white hover:bg-neutral-900" onClick={() => setModalOpen(true)}>
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Modal Popup */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-md relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-xl font-bold mb-4">Send a Message</h4>
              {submitted ? (
                <div className="text-green-600 font-semibold text-center py-8">Thank you! Your message has been sent.</div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border rounded px-3 py-2 bg-muted"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="contact">Email or Phone</label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      className="w-full border rounded px-3 py-2 bg-muted"
                      value={form.contact}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full border rounded px-3 py-2 bg-muted"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full mt-2">Send</Button>
                </form>
              )}
            </div>
          </div>
        )}

        {resumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-2xl relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                onClick={() => setResumeOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h4 className="text-xl font-bold mb-4">Resume Preview</h4>
              <div className="mb-4" style={{ height: '60vh' }}>
                <iframe
                  src={`${import.meta.env.BASE_URL}Nikhil_Suryawanshi_CV.pdf`}
                  title="Resume Preview"
                  width="100%"
                  height="100%"
                  className="border rounded"
                />
              </div>
              <a
                href={`${import.meta.env.BASE_URL}Nikhil_Suryawanshi_CV.pdf`}
                download
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

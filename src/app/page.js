'use client'; // Keep this at the top!

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Shield,
  Sun,
  Car,
  Scissors,
  ExternalLink
} from "lucide-react";

export default function Page() {
  const services = [
    {
      id: 1,
      title: "Full Car Tint",
      description: "Complete tinting for all side and rear windows. Choose from various shades for a uniform, sleek look and maximum protection.",
      image: "/IMG_7303.jpg",
      price: "Starting at $195",
      features: ["All Side Windows", "Rear Windshield", "Choice of Shades", "Lifetime Warranty"],
      icon: Car
    },
    {
      id:2,
      title:'Full SUV Tint',
      description:'Complete tinting for all side and rear windows of your SUV. Choose from various shades for a uniform, sleek look and maximum protection.',
      image:'/SUV.jpeg',
      price:'Starting at $249',
      features:['All Side Windows','Rear Windshield','Choice of Shades','Lifetime Warranty'],
      icon: Car

    },
    {
      id: 3,
      title: "Windshield Tint",
      description: "A clear, heat-rejecting film for your front windshield. Drastically reduces heat and UV rays without obstructing your view.",
      image: "/IMG_6809.jpg",
      price: "Starting at $85",
      features: ["Clear Film Available", "Maximum Heat Rejection", "99% UV Ray Blockage", "Legal Shades"],
      icon: Sun
    },
    {
      id:4,
      title: "Eye Brow Tint",
      description: "A stylish eyebrow tint for your windshield. Adds a sleek look while providing additional sun protection.",
      image: "/EyeBrowTint.jpg",
      price: "Starting at $39",
      features: ["Sleek Look", "Additional Sun Protection", "Customizable Shade",
        "Quick Installation"],
      icon: Sun
    },
    {
      id: 5,
      title: "Tint Removal",
      description: "Professional removal of old, bubbled, or faded tint. We safely remove the film and adhesive, preparing your glass for a fresh install.",
      image: "/IMG_5396.jpg",
      price: "Starting at $15",
      features: ["Safe & Clean Removal", "No Glass Damage", "Adhesive Cleanup", "Ready for New Tint"],
      icon: Scissors
    },
  ];

  const handleBooking = () => {
    // Replace with your actual booking page URL
    window.open("https://tinting-booking-client.vercel.app/1221Czt7p3i1K9mnNG_tBFoU0X09U1b8zmS2oW1kBQZQ", "_blank");
  };

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-900">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30" // Use opacity similar to original image
        >
          {/* Replace 'your-video.mp4' with the actual path to your video file */}
          {/* For best compatibility, provide multiple source formats (e.g., mp4, webm) */}
          <source src="/TintVideo.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/20"></div> {/* Dark overlay */}

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
          

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              KEVINS TINT
              <span className="block text-blue-400"></span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your vehicle with premium window tinting. Get top-tier UV protection, heat reduction, and a sleek, private look for your car.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-[#101e22] hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleBooking}
              >
                Book Now
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {/** 
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>5-Star Service</span>
              </div>
              */}
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-orange-400" />
                <span>Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Tinting Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We specialize in a range of automotive window tinting services using premium materials for an expert, guaranteed result.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-[#101e22] text-white p-3 rounded-full">
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 flex-shrink-0">
                      {service.price}
                    </Badge>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-[#101e22] rounded-full"></div>
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-[#101e22] hover:bg-blue-700 text-white rounded-xl py-3 font-semibold mt-auto"
                    onClick={handleBooking}
                  >
                    Book This Service
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why Choose Our Tinting Services?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#101e22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-slate-600">
                  We use only the highest quality films with lifetime warranties
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#101e22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Installation</h3>
                <p className="text-slate-600">
                  Professional installation with years of experience
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#101e22] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Service</h3>
                <p className="text-slate-600">
                  Proudly serving our local community with personalized service
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#101e22] hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl"
              onClick={handleBooking}
            >
              Get Your Free Quote
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#101e22] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-slate-300">(763) 221-5615</p>
              </div>

              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Located In</h3>
                <p className="text-slate-300">Anoka, MN </p>
              </div>
            {/** dont need the hours just yet  
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-slate-300">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
              </div>
                        */}
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl text-black font-bold mb-4">Schedule Your Appointment</h3>
              <p className="text-slate-800 mb-6">
                Book online for the fastest service, or call us for a custom quote
              </p>
              <Button
                size="lg"
                className="bg-[#101e22] hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl"
                onClick={handleBooking}
              >
                Book Your Appointment
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
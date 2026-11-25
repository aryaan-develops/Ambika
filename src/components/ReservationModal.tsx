"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, Users, CheckCircle2, Phone, User, Mail } from "lucide-react";
import { useCart } from "@/context/CartContext";
import confetti from "canvas-confetti";

export function ReservationModal() {
  const { isReservationOpen, setIsReservationOpen } = useCart();

  const [guests, setGuests] = useState("2 Guests");
  const [date, setDate] = useState("2026-11-25");
  const [time, setTime] = useState("11:30 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const timeSlots = [
    "08:30 AM",
    "10:00 AM",
    "11:30 AM",
    "01:00 PM",
    "03:00 PM",
    "05:00 PM",
    "06:30 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmed(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        setConfirmed(false);
        setIsReservationOpen(false);
      }, 3500);
    }, 1000);
  };

  if (!isReservationOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          onClick={() => setIsReservationOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        />

        <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-[#FAF5EE] p-6 sm:p-8 text-left shadow-2xl transition-all border border-[#22130C]/10 z-10 animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={() => setIsReservationOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full text-[#8C7366] hover:text-[#22130C] hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {confirmed ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3
                className="text-2xl font-bold text-[#22130C] font-serif"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Table Reserved at Ambika!
              </h3>
              <p className="text-sm text-[#8C7366] max-w-sm mx-auto">
                We&apos;re saving the best table for {name || "you"} for {guests} on{" "}
                {date} at {time}. An SMS confirmation has been sent to {phone || "your number"}.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5A83B]">
                  Ambika Bakery &amp; Cafe
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-[#22130C] font-serif mt-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reserve a Table
                </h3>
                <p className="text-xs text-[#8C7366] mt-1">
                  Enjoy freshly pulled espresso, hot oven bakes, and cafe brunch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Party Size & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-[#22130C] mb-1 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#E5A83B]" /> Party Size
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5-6 Guests (Group)</option>
                      <option>7+ Guests (Private Tasting)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-bold text-[#22130C] mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#E5A83B]" /> Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                    />
                  </div>
                </div>

                {/* Preferred Time Slots */}
                <div>
                  <label className="font-bold text-[#22130C] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E5A83B]" /> Preferred Time
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          time === slot
                            ? "bg-[#22130C] text-white shadow-xs"
                            : "bg-white text-[#22130C] border border-[#22130C]/10 hover:bg-stone-100"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="font-bold text-[#22130C] mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#E5A83B]" /> Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#22130C] mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#E5A83B]" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (206) 555-0192"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#22130C] mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#E5A83B]" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#22130C] mb-1 block">
                    Special Requests or Allergies (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Window seat, anniversary candle, nut allergy notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#22130C]/15 text-[#22130C] focus:outline-none focus:border-[#E5A83B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#E5A83B] text-[#22130C] font-bold text-xs uppercase tracking-wider hover:bg-[#D49323] transition-all shadow-md active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? "Confirming Table..." : "Confirm Reservation"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

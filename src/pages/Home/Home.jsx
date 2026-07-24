import React, { useState } from 'react'
import Header from '../../components/Header'
import { herosectionService } from "../../common/CommonArray";
import { Sparkles } from 'lucide-react';
import { HeroTaxiLane } from '../../components/Taxi3D/HeroTaxiLane';
import FromToLocation from '../../components/FromToLocation';

const Home = () => {


    return (
        <>
            <Header />

            {/* hero section start */}
            {/* HERO */}
            <section id="book" className="hero-bg">
                <div className="wrapper py-10 sm:py-14 md:py-20 flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0">
                    <div className="w-full lg:flex-1 pt-4 reveal_on_scroll">
                        <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            <Sparkles className="size-3.5 text-primary-brand" /> Fast & Comfortable Cab Booking
                        </span>
                        <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.08] md:leading-[1.05]">
                            Your Journey, <span className="text-primary-brand">Our Wheels</span>
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl">
                            Hassle-free car rentals for every destination. Book in minutes, travel in comfort — across
                            2000+ cities in India.
                        </p>

                        <div className="mt-8 flex flex-col md:flex-row max-w-xl">
                            {herosectionService.map((s) => (
                                <div key={s.label} className="hover_lift mt-3 first:mt-0 md:mt-0 md:ml-3 md:first:ml-0 md:w-[calc((100%-1.5rem)/3)] flex items-center rounded-xl border border-border bg-card p-3 shadow-soft">
                                    <span className="icon_motion mr-2 inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-brand/15 text-primary-brand">
                                        {s.icon}
                                    </span>
                                    <span className="text-sm font-semibold text-primary">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:flex-1 lg:ml-10 lg:pl-6 reveal_on_scroll reveal_delay_1">
                        <FromToLocation homeLayout />
                    </div>
                </div>
                <HeroTaxiLane />
            </section>

            {/* hero section end */}
        </>
    )
}

export default Home

"use client";

import React, { useState } from "react";

interface Location {
  city: string;
  country: string;
  region?: string;
  latitude?: number;
  longitude?: number;
}

interface Donor {
  id: number;
  name: string;
  type: "Foundation" | "Individual" | "Corporate";
  amount: number;
  date: string;
  is_anonymous: boolean;
  location: {
    city: string;
    country: string;
  };
  message?: string;
}

interface Update {
  date: string;
  title: string;
  description: string;
}

interface Cause {
  id: number;
  title: string;
  category: string;
  status: string;
  urgency_level: "High" | "Medium" | "Low";
  short_description: string;
  detailed_description: string;
  image_url: string;
  location: Location;
  metrics: {
    goal_amount: number;
    raised_amount: number;
    percentage_funded: number;
    donor_count: number;
    average_donation: number;
    days_remaining: number;
    days_active: number;
  };
  contact: {
    organization: string;
    coordinator: string;
    email: string;
    phone: string;
  };
  donors: Donor[];
  timeline: {
    created_date: string;
    target_date: string;
    last_updated: string;
  };
  tags: string[];
  impact_metrics: {
    beneficiaries: number;
    metric_description: string;
  };
  updates: Update[];
}

// Main App component
const App = () => {
  // Data is defined here, but in a real app, it would likely come from an API.
  const data = {
    message: "Amana Fundraising causes data retrieved successfully",
    company_info: {
      name: "Amana Fundraising",
      founded: "2020",
      headquarters: "Amman, Jordan",
      industry: "Non-Profit Fundraising",
      description:
        "Leading fundraising platform connecting donors with impactful causes across the Middle East, specializing in education, agriculture, and small business initiatives that create lasting change in communities.",
    },
    fundraising_stats: {
      total_causes: 8,
      active_causes: 7,
      total_raised: 706640,
      total_goal: 970000,
      average_completion_rate: 74,
      top_category: "Education",
      total_donors: 359,
      average_donation: 1923,
    },
    causes: [
      {
        id: 1,
        title: "Digital Classroom Initiative for Gaza Schools",
        category: "Education",
        status: "Active",
        urgency_level: "High",
        short_description:
          "Providing laptops, tablets, and internet connectivity to 500 students in Gaza to ensure continuity of education despite ongoing challenges.",
        detailed_description:
          "The Digital Classroom Initiative aims to bridge the digital divide for Palestinian students in Gaza by providing essential technology and internet access. With over 70% of schools lacking adequate digital infrastructure, students are falling behind in essential 21st-century skills. This initiative will provide 300 laptops, 200 tablets, portable internet hotspots, and teacher training programs to serve 500 students across 10 schools in Gaza. The project includes a sustainability component with local technical support and maintenance training to ensure long-term success.",
        image_url: "/photos/student.jpg",
        location: {
          city: "Gaza",
          country: "Palestine",
          region: "Middle East",
          latitude: 31.3547,
          longitude: 34.3088,
        },
        metrics: {
          goal_amount: 75000,
          raised_amount: 52340,
          percentage_funded: 70,
          donor_count: 37,
          average_donation: 1415,
          days_remaining: 32,
          days_active: 333,
        },
        contact: {
          organization: "Palestinian Education Foundation",
          coordinator: "Dr. Layla Mansour",
          email: "layla.mansour@paled.org",
          phone: "+970-8-123-4567",
        },
        donors: [
          {
            id: 33,
            name: "Anonymous Donor",
            type: "Foundation",
            amount: 2403,
            date: "2025-09-12",
            is_anonymous: true,
            location: { city: "Hebron", country: "Palestine" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 27,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 241,
            date: "2025-09-11",
            is_anonymous: false,
            location: { city: "Amman", country: "UAE" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 37,
            name: "Desert Rose Industries",
            type: "Corporate",
            amount: 1981,
            date: "2025-09-07",
            is_anonymous: false,
            location: { city: "Amman", country: "UAE" },
          },
          {
            id: 5,
            name: "Bank al Etihad",
            type: "Corporate",
            amount: 5717,
            date: "2025-09-06",
            is_anonymous: false,
            location: { city: "Irbid", country: "Lebanon" },
            message: "Small businesses are the backbone of our community.",
          },
          {
            id: 1,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 4646,
            date: "2025-09-05",
            is_anonymous: true,
            location: { city: "Ramallah", country: "Palestine" },
          },
          {
            id: 10,
            name: "Gaza Relief Network",
            type: "Individual",
            amount: 80,
            date: "2025-09-02",
            is_anonymous: false,
            location: { city: "Gaza", country: "Palestine" },
          },
          {
            id: 21,
            name: "Oasis Technologies",
            type: "Corporate",
            amount: 5086,
            date: "2025-08-27",
            is_anonymous: false,
            location: { city: "Cairo", country: "Egypt" },
          },
          {
            id: 36,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 2169,
            date: "2025-08-25",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Jordan" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 31,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 265,
            date: "2025-08-22",
            is_anonymous: true,
            location: { city: "Amman", country: "Jordan" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 32,
            name: "Oasis Technologies",
            type: "Corporate",
            amount: 5391,
            date: "2025-08-16",
            is_anonymous: false,
            location: { city: "Hebron", country: "Saudi Arabia" },
            message:
              "Supporting sustainable agriculture for generations to come.",
          },
          {
            id: 12,
            name: "Palestinian Heritage Society",
            type: "Foundation",
            amount: 5996,
            date: "2025-08-14",
            is_anonymous: false,
            location: { city: "Gaza", country: "Saudi Arabia" },
          },
          {
            id: 11,
            name: "Fatima Al-Zahra",
            type: "Individual",
            amount: 211,
            date: "2025-08-13",
            is_anonymous: false,
            location: { city: "Gaza", country: "Lebanon" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 30,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 143,
            date: "2025-08-13",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Palestine" },
          },
          {
            id: 17,
            name: "Global Impact Foundation",
            type: "Individual",
            amount: 225,
            date: "2025-08-11",
            is_anonymous: false,
            location: { city: "Amman", country: "Lebanon" },
          },
          {
            id: 29,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 484,
            date: "2025-08-09",
            is_anonymous: false,
            location: { city: "Cairo", country: "Jordan" },
          },
          {
            id: 19,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 298,
            date: "2025-08-08",
            is_anonymous: true,
            location: { city: "Amman", country: "Jordan" },
          },
          {
            id: 24,
            name: "Palestinian Heritage Society",
            type: "Individual",
            amount: 117,
            date: "2025-08-08",
            is_anonymous: false,
            location: { city: "Hebron", country: "Palestine" },
          },
          {
            id: 25,
            name: "Michael Brown",
            type: "Individual",
            amount: 105,
            date: "2025-08-08",
            is_anonymous: false,
            location: { city: "Hebron", country: "Syria" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 23,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 225,
            date: "2025-08-05",
            is_anonymous: false,
            location: { city: "Zarqa", country: "UAE" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 9,
            name: "Michael Brown",
            type: "Individual",
            amount: 317,
            date: "2025-07-29",
            is_anonymous: false,
            location: { city: "Cairo", country: "Saudi Arabia" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 20,
            name: "Women Entrepreneurs Fund",
            type: "Individual",
            amount: 41,
            date: "2025-07-26",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Lebanon" },
          },
          {
            id: 16,
            name: "Bank al Etihad",
            type: "Corporate",
            amount: 4840,
            date: "2025-07-25",
            is_anonymous: false,
            location: { city: "Nablus", country: "UAE" },
          },
          {
            id: 4,
            name: "Gaza Relief Network",
            type: "Individual",
            amount: 502,
            date: "2025-07-23",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Palestine" },
          },
          {
            id: 8,
            name: "Women Entrepreneurs Fund",
            type: "Individual",
            amount: 255,
            date: "2025-07-22",
            is_anonymous: false,
            location: { city: "Gaza", country: "Lebanon" },
            message: "Investing in education is investing in tomorrow.",
          },
          {
            id: 35,
            name: "Mediterranean Trading Co.",
            type: "Corporate",
            amount: 4006,
            date: "2025-07-21",
            is_anonymous: false,
            location: { city: "Hebron", country: "Saudi Arabia" },
          },
          {
            id: 13,
            name: "Zaid Foundation",
            type: "Individual",
            amount: 114,
            date: "2025-07-20",
            is_anonymous: false,
            location: { city: "Cairo", country: "Jordan" },
          },
          {
            id: 14,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 2144,
            date: "2025-07-20",
            is_anonymous: false,
            location: { city: "Irbid", country: "Jordan" },
          },
          {
            id: 2,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 423,
            date: "2025-07-17",
            is_anonymous: true,
            location: { city: "Irbid", country: "Palestine" },
          },
          {
            id: 28,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 132,
            date: "2025-07-12",
            is_anonymous: true,
            location: { city: "Hebron", country: "Qatar" },
          },
          {
            id: 6,
            name: "Emily Chen",
            type: "Individual",
            amount: 379,
            date: "2025-07-07",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Saudi Arabia" },
          },
          {
            id: 22,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 457,
            date: "2025-07-02",
            is_anonymous: false,
            location: { city: "Cairo", country: "Jordan" },
          },
          {
            id: 7,
            name: "Jordan Education Trust",
            type: "Individual",
            amount: 176,
            date: "2025-06-28",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Palestine" },
          },
          {
            id: 18,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 94,
            date: "2025-06-25",
            is_anonymous: true,
            location: { city: "Cairo", country: "Saudi Arabia" },
          },
          {
            id: 3,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 1994,
            date: "2025-06-24",
            is_anonymous: true,
            location: { city: "Cairo", country: "Qatar" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 15,
            name: "David Smith",
            type: "Individual",
            amount: 109,
            date: "2025-06-23",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Egypt" },
          },
          {
            id: 26,
            name: "Global Impact Foundation",
            type: "Individual",
            amount: 262,
            date: "2025-06-23",
            is_anonymous: false,
            location: { city: "Aqaba", country: "Qatar" },
            message: "Investing in education is investing in tomorrow.",
          },
          {
            id: 34,
            name: "Global Impact Foundation",
            type: "Individual",
            amount: 312,
            date: "2025-06-19",
            is_anonymous: false,
            location: { city: "Amman", country: "Lebanon" },
          },
        ],
        timeline: {
          created_date: "2024-10-15",
          target_date: "2025-01-30",
          last_updated: "2024-12-20",
        },
        tags: [
          "education",
          "technology",
          "palestine",
          "digital-divide",
          "youth",
        ],
        impact_metrics: {
          beneficiaries: 500,
          metric_description:
            "students will gain access to digital learning tools",
        },
        updates: [
          {
            date: "2024-12-20",
            title: "70% Funding Milestone Reached!",
            description:
              "We're thrilled to announce we've reached 70% of our funding goal! The first batch of 150 laptops has been ordered and will arrive next month.",
          },
          {
            date: "2024-12-01",
            title: "Partnership with Local Tech Company",
            description:
              "We've partnered with Gaza Tech Solutions to provide ongoing technical support and maintenance for all devices.",
          },
          {
            date: "2024-11-15",
            title: "Teacher Training Program Launched",
            description:
              "Started training sessions for 25 teachers across participating schools on digital teaching methodologies.",
          },
        ],
      },
      {
        id: 2,
        title: "Vocational Training Center for Jordanian Youth",
        category: "Education",
        status: "Active",
        urgency_level: "Medium",
        short_description:
          "Establishing a modern vocational training center in Zarqa to provide technical skills training for 200 unemployed youth aged 18-25.",
        detailed_description:
          "Jordan faces a youth unemployment rate of over 50%, with many young people lacking the technical skills needed for available jobs. This project will establish a comprehensive vocational training center offering courses in electrical work, plumbing, automotive repair, carpentry, and computer skills. The center will include modern equipment, certified instructors, and job placement assistance. We aim to train 200 youth annually with a focus on hands-on learning and industry partnerships to ensure graduates find meaningful employment.",
        image_url: "/photos/student.jpg",
        location: {
          city: "Zarqa",
          country: "Jordan",
          region: "Middle East",
          latitude: 32.0728,
          longitude: 36.0876,
        },
        metrics: {
          goal_amount: 120000,
          raised_amount: 89500,
          percentage_funded: 75,
          donor_count: 50,
          average_donation: 1790,
          days_remaining: 49,
          days_active: 316,
        },
        contact: {
          organization: "Jordan Youth Development Society",
          coordinator: "Engineer Ahmad Al-Khatib",
          email: "ahmad.khatib@jyds.jo",
          phone: "+962-5-456-7890",
        },
        donors: [
          {
            id: 10,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 4541,
            date: "2025-09-12",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Syria" },
          },
          {
            id: 20,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 72,
            date: "2025-09-12",
            is_anonymous: true,
            location: { city: "Hebron", country: "UAE" },
          },
          {
            id: 15,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 122,
            date: "2025-09-08",
            is_anonymous: true,
            location: { city: "Gaza", country: "Egypt" },
          },
          {
            id: 49,
            name: "Nour Farouk",
            type: "Individual",
            amount: 449,
            date: "2025-09-05",
            is_anonymous: false,
            location: { city: "Ramallah", country: "Qatar" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 33,
            name: "Jordan Telecom Group",
            type: "Corporate",
            amount: 1712,
            date: "2025-09-04",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Lebanon" },
          },
          {
            id: 40,
            name: "Zaid Foundation",
            type: "Individual",
            amount: 371,
            date: "2025-09-04",
            is_anonymous: false,
            location: { city: "Hebron", country: "Egypt" },
          },
          {
            id: 45,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 337,
            date: "2025-08-30",
            is_anonymous: true,
            location: { city: "Ramallah", country: "Saudi Arabia" },
          },
          {
            id: 46,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 198,
            date: "2025-08-26",
            is_anonymous: true,
            location: { city: "Alexandria", country: "Egypt" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 1,
            name: "Ahmed Al-Rashid",
            type: "Individual",
            amount: 365,
            date: "2025-08-25",
            is_anonymous: false,
            location: { city: "Amman", country: "Syria" },
          },
          {
            id: 27,
            name: "Jordan Telecom Group",
            type: "Corporate",
            amount: 5653,
            date: "2025-08-22",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Qatar" },
            message: "Together we can make a real difference.",
          },
          {
            id: 28,
            name: "Palestinian Heritage Society",
            type: "Individual",
            amount: 372,
            date: "2025-08-22",
            is_anonymous: false,
            location: { city: "Alexandria", country: "UAE" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 48,
            name: "Omar Qasemi",
            type: "Individual",
            amount: 133,
            date: "2025-08-19",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Palestine" },
          },
          {
            id: 8,
            name: "David Smith",
            type: "Foundation",
            amount: 5766,
            date: "2025-08-18",
            is_anonymous: false,
            location: { city: "Ramallah", country: "Qatar" },
          },
          {
            id: 37,
            name: "Michael Brown",
            type: "Individual",
            amount: 268,
            date: "2025-08-16",
            is_anonymous: false,
            location: { city: "Ramallah", country: "Palestine" },
          },
          {
            id: 38,
            name: "Heritage Investment Fund",
            type: "Corporate",
            amount: 5195,
            date: "2025-08-15",
            is_anonymous: false,
            location: { city: "Cairo", country: "Qatar" },
          },
          {
            id: 44,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 3314,
            date: "2025-08-14",
            is_anonymous: false,
            location: { city: "Irbid", country: "Egypt" },
          },
          {
            id: 34,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 213,
            date: "2025-08-13",
            is_anonymous: true,
            location: { city: "Irbid", country: "Egypt" },
          },
          {
            id: 3,
            name: "Global Impact Foundation",
            type: "Foundation",
            amount: 3079,
            date: "2025-08-11",
            is_anonymous: false,
            location: { city: "Ramallah", country: "UAE" },
          },
          {
            id: 29,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 186,
            date: "2025-08-10",
            is_anonymous: true,
            location: { city: "Irbid", country: "UAE" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 43,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 132,
            date: "2025-08-10",
            is_anonymous: true,
            location: { city: "Nablus", country: "Syria" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 21,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 104,
            date: "2025-08-09",
            is_anonymous: false,
            location: { city: "Aqaba", country: "Syria" },
          },
          {
            id: 18,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 67,
            date: "2025-08-08",
            is_anonymous: true,
            location: { city: "Alexandria", country: "Lebanon" },
          },
          {
            id: 24,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 513,
            date: "2025-08-06",
            is_anonymous: false,
            location: { city: "Alexandria", country: "UAE" },
          },
          {
            id: 19,
            name: "Anonymous Donor",
            type: "Foundation",
            amount: 1774,
            date: "2025-08-02",
            is_anonymous: true,
            location: { city: "Zarqa", country: "Syria" },
          },
          {
            id: 9,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 216,
            date: "2025-07-30",
            is_anonymous: true,
            location: { city: "Nablus", country: "Syria" },
          },
          {
            id: 5,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 5044,
            date: "2025-07-25",
            is_anonymous: false,
            location: { city: "Irbid", country: "Qatar" },
          },
          {
            id: 14,
            name: "Mediterranean Trading Co.",
            type: "Corporate",
            amount: 2441,
            date: "2025-07-24",
            is_anonymous: false,
            location: { city: "Aqaba", country: "Saudi Arabia" },
          },
          {
            id: 36,
            name: "Fatima Al-Zahra",
            type: "Individual",
            amount: 73,
            date: "2025-07-22",
            is_anonymous: false,
            location: { city: "Gaza", country: "Palestine" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 16,
            name: "Amman Business Association",
            type: "Individual",
            amount: 354,
            date: "2025-07-19",
            is_anonymous: false,
            location: { city: "Irbid", country: "UAE" },
          },
          {
            id: 6,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 306,
            date: "2025-07-18",
            is_anonymous: true,
            location: { city: "Irbid", country: "Egypt" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 41,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 5848,
            date: "2025-07-17",
            is_anonymous: true,
            location: { city: "Amman", country: "Lebanon" },
          },
          {
            id: 2,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 469,
            date: "2025-07-14",
            is_anonymous: true,
            location: { city: "Gaza", country: "Syria" },
          },
          {
            id: 4,
            name: "Sarah Johnson",
            type: "Individual",
            amount: 122,
            date: "2025-07-14",
            is_anonymous: false,
            location: { city: "Amman", country: "Saudi Arabia" },
          },
          {
            id: 35,
            name: "Michael Brown",
            type: "Individual",
            amount: 89,
            date: "2025-07-11",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Syria" },
          },
          {
            id: 32,
            name: "Aramex Foundation",
            type: "Corporate",
            amount: 1260,
            date: "2025-07-10",
            is_anonymous: false,
            location: { city: "Irbid", country: "Palestine" },
          },
          {
            id: 12,
            name: "Women Entrepreneurs Fund",
            type: "Individual",
            amount: 180,
            date: "2025-07-09",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Palestine" },
          },
          {
            id: 22,
            name: "Bank al Etihad",
            type: "Corporate",
            amount: 5010,
            date: "2025-07-06",
            is_anonymous: false,
            location: { city: "Hebron", country: "UAE" },
          },
          {
            id: 11,
            name: "Palestinian Heritage Society",
            type: "Individual",
            amount: 490,
            date: "2025-07-05",
            is_anonymous: false,
            location: { city: "Hebron", country: "Qatar" },
          },
          {
            id: 39,
            name: "Desert Rose Industries",
            type: "Corporate",
            amount: 3455,
            date: "2025-07-05",
            is_anonymous: false,
            location: { city: "Nablus", country: "UAE" },
          },
          {
            id: 23,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 43,
            date: "2025-07-04",
            is_anonymous: true,
            location: { city: "Gaza", country: "Egypt" },
          },
          {
            id: 25,
            name: "Nour Farouk",
            type: "Individual",
            amount: 500,
            date: "2025-07-03",
            is_anonymous: false,
            location: { city: "Cairo", country: "UAE" },
          },
          {
            id: 30,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 321,
            date: "2025-07-02",
            is_anonymous: false,
            location: { city: "Ramallah", country: "Syria" },
            message: "Small businesses are the backbone of our community.",
          },
          {
            id: 31,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 2821,
            date: "2025-07-01",
            is_anonymous: true,
            location: { city: "Amman", country: "UAE" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 50,
            name: "Fatima Al-Zahra",
            type: "Individual",
            amount: 77,
            date: "2025-07-01",
            is_anonymous: false,
            location: { city: "Aqaba", country: "UAE" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 17,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 240,
            date: "2025-06-27",
            is_anonymous: true,
            location: { city: "Amman", country: "Lebanon" },
          },
          {
            id: 7,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 3554,
            date: "2025-06-25",
            is_anonymous: true,
            location: { city: "Ramallah", country: "Syria" },
          },
          {
            id: 47,
            name: "Gaza Relief Network",
            type: "Individual",
            amount: 437,
            date: "2025-06-23",
            is_anonymous: false,
            location: { city: "Ramallah", country: "Egypt" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 13,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 272,
            date: "2025-06-19",
            is_anonymous: true,
            location: { city: "Ramallah", country: "Lebanon" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 42,
            name: "Palestinian Heritage Society",
            type: "Individual",
            amount: 465,
            date: "2025-06-19",
            is_anonymous: false,
            location: { city: "Hebron", country: "Syria" },
          },
          {
            id: 26,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 390,
            date: "2025-06-16",
            is_anonymous: false,
            location: { city: "Irbid", country: "Qatar" },
            message: "Together we can make a real difference.",
          },
        ],
        timeline: {
          created_date: "2024-11-01",
          target_date: "2025-03-15",
          last_updated: "2024-12-19",
        },
        tags: [
          "vocational-training",
          "youth-employment",
          "jordan",
          "skills-development",
          "job-creation",
        ],
        impact_metrics: {
          beneficiaries: 200,
          metric_description:
            "young adults will receive certified technical training annually",
        },
        updates: [
          {
            date: "2024-12-19",
            title: "Equipment Procurement Underway",
            description:
              "We've started procuring training equipment including automotive tools, electrical testing equipment, and computer stations.",
          },
          {
            date: "2024-12-05",
            title: "Building Renovation Progress",
            description:
              "Renovation of the training center building is 60% complete. New classrooms and workshop spaces are taking shape.",
          },
        ],
      },
      {
        id: 3,
        title: "Sustainable Farming Initiative for West Bank Villages",
        category: "Agriculture",
        status: "Active",
        urgency_level: "High",
        short_description:
          "Supporting 50 Palestinian farming families with modern irrigation systems, greenhouse construction, and sustainable farming techniques.",
        detailed_description:
          "Palestinian farmers in the West Bank face severe water restrictions and limited access to modern farming equipment. This initiative provides drip irrigation systems, greenhouse construction materials, seeds for high-yield crops, and training in sustainable farming practices. The project will directly benefit 50 farming families across 5 villages, helping them increase crop yields by 300% while using 60% less water. Additionally, we'll establish a cooperative marketing system to help farmers get better prices for their produce in local and regional markets.",
        image_url: "/photos/student.jpg",
        location: {
          city: "Ramallah",
          country: "Palestine",
          region: "Middle East",
          latitude: 31.9073,
          longitude: 35.2044,
        },
        metrics: {
          goal_amount: 95000,
          raised_amount: 73200,
          percentage_funded: 77,
          donor_count: 50,
          average_donation: 1464,
          days_remaining: 12,
          days_active: 353,
        },
        contact: {
          organization: "Palestinian Agricultural Relief Committee",
          coordinator: "Nour Al-Qasemi",
          email: "nour.qasemi@parc.ps",
          phone: "+970-2-987-6543",
        },
        donors: [
          {
            id: 8,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 200,
            date: "2025-09-11",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Lebanon" },
          },
          {
            id: 18,
            name: "Tech for Good Initiative",
            type: "Individual",
            amount: 148,
            date: "2025-09-11",
            is_anonymous: false,
            location: { city: "Aqaba", country: "Lebanon" },
          },
          {
            id: 35,
            name: "Nour Farouk",
            type: "Individual",
            amount: 37,
            date: "2025-09-10",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Lebanon" },
          },
          {
            id: 28,
            name: "Gaza Relief Network",
            type: "Individual",
            amount: 390,
            date: "2025-09-08",
            is_anonymous: false,
            location: { city: "Nablus", country: "Jordan" },
          },
          {
            id: 38,
            name: "Jordan Education Trust",
            type: "Foundation",
            amount: 3334,
            date: "2025-09-07",
            is_anonymous: false,
            location: { city: "Cairo", country: "Qatar" },
          },
          {
            id: 32,
            name: "Nour Farouk",
            type: "Individual",
            amount: 409,
            date: "2025-09-06",
            is_anonymous: false,
            location: { city: "Nablus", country: "Saudi Arabia" },
          },
          {
            id: 50,
            name: "Zaid Foundation",
            type: "Individual",
            amount: 356,
            date: "2025-09-03",
            is_anonymous: false,
            location: { city: "Nablus", country: "UAE" },
          },
          {
            id: 2,
            name: "Amman Business Association",
            type: "Individual",
            amount: 492,
            date: "2025-08-27",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Jordan" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 19,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 346,
            date: "2025-08-24",
            is_anonymous: true,
            location: { city: "Zarqa", country: "Jordan" },
          },
          {
            id: 20,
            name: "Sarah Johnson",
            type: "Foundation",
            amount: 2874,
            date: "2025-08-23",
            is_anonymous: false,
            location: { city: "Gaza", country: "Syria" },
          },
          {
            id: 48,
            name: "Jordan Education Trust",
            type: "Individual",
            amount: 482,
            date: "2025-08-20",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Syria" },
          },
          {
            id: 9,
            name: "Global Impact Foundation",
            type: "Individual",
            amount: 167,
            date: "2025-08-18",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Jordan" },
          },
          {
            id: 22,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 253,
            date: "2025-08-16",
            is_anonymous: false,
            location: { city: "Zarqa", country: "UAE" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 44,
            name: "Middle East Development Bank",
            type: "Corporate",
            amount: 3368,
            date: "2025-08-16",
            is_anonymous: false,
            location: { city: "Hebron", country: "Saudi Arabia" },
          },
          {
            id: 26,
            name: "Zaid Foundation",
            type: "Individual",
            amount: 472,
            date: "2025-08-13",
            is_anonymous: false,
            location: { city: "Nablus", country: "Palestine" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 24,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 37,
            date: "2025-08-12",
            is_anonymous: true,
            location: { city: "Irbid", country: "UAE" },
          },
          {
            id: 39,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 138,
            date: "2025-08-11",
            is_anonymous: true,
            location: { city: "Irbid", country: "Syria" },
          },
          {
            id: 40,
            name: "Fatima Al-Zahra",
            type: "Individual",
            amount: 164,
            date: "2025-08-11",
            is_anonymous: false,
            location: { city: "Gaza", country: "Palestine" },
          },
          {
            id: 11,
            name: "Ahmed Al-Rashid",
            type: "Individual",
            amount: 39,
            date: "2025-08-10",
            is_anonymous: false,
            location: { city: "Amman", country: "UAE" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 31,
            name: "Amman Business Association",
            type: "Foundation",
            amount: 4208,
            date: "2025-08-08",
            is_anonymous: false,
            location: { city: "Gaza", country: "Qatar" },
          },
          {
            id: 46,
            name: "Oasis Technologies",
            type: "Corporate",
            amount: 3397,
            date: "2025-08-08",
            is_anonymous: false,
            location: { city: "Gaza", country: "Egypt" },
          },
          {
            id: 47,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 397,
            date: "2025-08-08",
            is_anonymous: false,
            location: { city: "Amman", country: "Syria" },
          },
          {
            id: 7,
            name: "Cairo Capital Partners",
            type: "Corporate",
            amount: 3719,
            date: "2025-08-05",
            is_anonymous: false,
            location: { city: "Nablus", country: "Egypt" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 33,
            name: "David Smith",
            type: "Individual",
            amount: 308,
            date: "2025-08-05",
            is_anonymous: false,
            location: { city: "Amman", country: "Saudi Arabia" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 17,
            name: "Global Impact Foundation",
            type: "Individual",
            amount: 87,
            date: "2025-08-04",
            is_anonymous: false,
            location: { city: "Hebron", country: "Palestine" },
            message:
              "Supporting sustainable agriculture for generations to come.",
          },
          {
            id: 41,
            name: "Levant Construction Group",
            type: "Corporate",
            amount: 4148,
            date: "2025-07-29",
            is_anonymous: false,
            location: { city: "Amman", country: "Egypt" },
          },
          {
            id: 10,
            name: "Anonymous Donor",
            type: "Individual",
            amount: 443,
            date: "2025-07-28",
            is_anonymous: true,
            location: { city: "Ramallah", country: "Saudi Arabia" },
            message: "Small businesses are the backbone of our community.",
          },
          {
            id: 15,
            name: "David Smith",
            type: "Individual",
            amount: 463,
            date: "2025-07-26",
            is_anonymous: false,
            location: { city: "Gaza", country: "Saudi Arabia" },
          },
          {
            id: 34,
            name: "David Smith",
            type: "Individual",
            amount: 415,
            date: "2025-07-26",
            is_anonymous: false,
            location: { city: "Hebron", country: "Saudi Arabia" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 21,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 51,
            date: "2025-07-22",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Egypt" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 5,
            name: "Anonymous Donor",
            type: "Foundation",
            amount: 5038,
            date: "2025-07-20",
            is_anonymous: true,
            location: { city: "Zarqa", country: "Syria" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 25,
            name: "Women Entrepreneurs Fund",
            type: "Individual",
            amount: 455,
            date: "2025-07-19",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Saudi Arabia" },
          },
          {
            id: 37,
            name: "David Smith",
            type: "Individual",
            amount: 416,
            date: "2025-07-18",
            is_anonymous: false,
            location: { city: "Cairo", country: "Egypt" },
          },
          {
            id: 6,
            name: "Levant Construction Group",
            type: "Corporate",
            amount: 5065,
            date: "2025-07-14",
            is_anonymous: false,
            location: { city: "Gaza", country: "Syria" },
          },
          {
            id: 1,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 1268,
            date: "2025-07-13",
            is_anonymous: true,
            location: { city: "Nablus", country: "Syria" },
            message: "Small businesses are the backbone of our community.",
          },
          {
            id: 14,
            name: "Jordan Education Trust",
            type: "Individual",
            amount: 307,
            date: "2025-07-13",
            is_anonymous: false,
            location: { city: "Amman", country: "Saudi Arabia" },
          },
          {
            id: 43,
            name: "Gaza Relief Network",
            type: "Individual",
            amount: 284,
            date: "2025-07-13",
            is_anonymous: false,
            location: { city: "Zarqa", country: "Lebanon" },
          },
          {
            id: 45,
            name: "Mediterranean Trading Co.",
            type: "Corporate",
            amount: 1613,
            date: "2025-07-11",
            is_anonymous: false,
            location: { city: "Amman", country: "Lebanon" },
            message: "Every child deserves access to quality education.",
          },
          {
            id: 13,
            name: "Layla Hijazi",
            type: "Individual",
            amount: 27,
            date: "2025-07-09",
            is_anonymous: false,
            location: { city: "Cairo", country: "UAE" },
            message: "Together we can make a real difference.",
          },
          {
            id: 30,
            name: "Amman Business Association",
            type: "Individual",
            amount: 330,
            date: "2025-07-07",
            is_anonymous: false,
            location: { city: "Hebron", country: "Palestine" },
          },
          {
            id: 27,
            name: "Cairo Capital Partners",
            type: "Corporate",
            amount: 3118,
            date: "2025-07-06",
            is_anonymous: false,
            location: { city: "Cairo", country: "Jordan" },
          },
          {
            id: 29,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 2841,
            date: "2025-07-06",
            is_anonymous: true,
            location: { city: "Irbid", country: "Egypt" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 12,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 1126,
            date: "2025-07-03",
            is_anonymous: true,
            location: { city: "Irbid", country: "Syria" },
            message: "Education is the key to breaking the cycle of poverty.",
          },
          {
            id: 16,
            name: "Tech for Good Initiative",
            type: "Foundation",
            amount: 2090,
            date: "2025-07-01",
            is_anonymous: false,
            location: { city: "Alexandria", country: "Syria" },
          },
          {
            id: 23,
            name: "Tech for Good Initiative",
            type: "Individual",
            amount: 337,
            date: "2025-06-28",
            is_anonymous: false,
            location: { city: "Irbid", country: "Lebanon" },
            message: "Supporting our farmers means securing our future.",
          },
          {
            id: 36,
            name: "Mohammed Hassan",
            type: "Individual",
            amount: 117,
            date: "2025-06-28",
            is_anonymous: false,
            location: { city: "Gaza", country: "Egypt" },
          },
          {
            id: 3,
            name: "Fatima Al-Zahra",
            type: "Individual",
            amount: 262,
            date: "2025-06-24",
            is_anonymous: false,
            location: { city: "Irbid", country: "UAE" },
          },
          {
            id: 4,
            name: "Anonymous Donor",
            type: "Foundation",
            amount: 2400,
            date: "2025-06-24",
            is_anonymous: true,
            location: { city: "Cairo", country: "Jordan" },
            message: "Small businesses are the backbone of our community.",
          },
          {
            id: 42,
            name: "Anonymous Donor",
            type: "Corporate",
            amount: 3335,
            date: "2025-06-22",
            is_anonymous: true,
            location: { city: "Cairo", country: "Qatar" },
            message: "May this contribution help build a better future.",
          },
          {
            id: 49,
            name: "Emily Chen",
            type: "Individual",
            amount: 347,
            date: "2025-06-17",
            is_anonymous: false,
            location: { city: "Aqaba", country: "Saudi Arabia" },
          },
        ],
        timeline: {
          created_date: "2024-09-25",
          target_date: "2025-04-20",
          last_updated: "2024-12-18",
        },
        tags: [
          "sustainable-agriculture",
          "water-conservation",
          "palestine",
          "food-security",
          "rural-development",
        ],
        impact_metrics: {
          beneficiaries: 50,
          metric_description:
            "farming families will increase their crop yields and income",
        },
        updates: [
          {
            date: "2024-12-18",
            title: "First Greenhouse Completed!",
            description:
              "The first greenhouse in Beit Rima village is now operational. Farmers are already seeing improved crop protection and yields.",
          },
          {
            date: "2024-12-01",
            title: "Irrigation Systems Installation",
            description:
              "Drip irrigation systems have been installed in 3 villages, reducing water usage by 55% while maintaining crop quality.",
          },
          {
            date: "2024-11-20",
            title: "Farmer Training Workshop Success",
            description:
              "Completed intensive 5-day training workshops for 30 farmers on sustainable farming techniques and greenhouse management.",
          },
        ],
      },
    ] as Cause[],
  };

  const [view, setView] = useState<"home" | "about" | "contact">("home");
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderProgress = (percentage: number) => {
    const barColor = percentage >= 100 ? "bg-green-500" : "bg-blue-600";
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${barColor} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderUrgency = (level: "High" | "Medium" | "Low") => {
    switch (level) {
      case "High":
        return (
          <span className="text-sm font-semibold text-red-500">Urgent</span>
        );
      case "Medium":
        return (
          <span className="text-sm font-semibold text-orange-500">Medium</span>
        );
      case "Low":
        return (
          <span className="text-sm font-semibold text-green-500">Low</span>
        );
      default:
        return null;
    }
  };

  // Components for different views
  const HomePage = () => {
    const CausesList = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
        {data.causes.map((cause) => (
          <div
            key={cause.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
            onClick={() => setSelectedCause(cause)}
          >
            <img
              src={`https://placehold.co/600x400/1e293b/white?text=${cause.category}`}
              alt={cause.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-white bg-slate-800 rounded-full px-3 py-1">
                  {cause.category}
                </span>
                {renderUrgency(cause.urgency_level)}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {cause.title}
              </h2>
              <p className="text-gray-600 mb-4">{cause.short_description}</p>

              <div className="flex flex-col space-y-2 mb-4">
                <span className="text-sm font-semibold text-gray-700">
                  {cause.metrics.percentage_funded}% Funded
                </span>
                {renderProgress(cause.metrics.percentage_funded)}
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-500">
                  Raised:{" "}
                  <span className="text-blue-600 font-bold">
                    {formatCurrency(cause.metrics.raised_amount)}
                  </span>
                </span>
                <span className="text-gray-500">
                  Goal:{" "}
                  <span className="text-gray-800 font-bold">
                    {formatCurrency(cause.metrics.goal_amount)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    const CauseDetails = () =>
      selectedCause && (
        <div className="p-4 md:p-8">
          <button
            onClick={() => setSelectedCause(null)}
            className="mb-6 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Causes
          </button>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={`https://placehold.co/800x600/1e293b/white?text=${selectedCause.category}`}
                  alt={selectedCause.title}
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    {selectedCause.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-white bg-slate-800 rounded-full px-3 py-1">
                      {selectedCause.category}
                    </span>
                    {renderUrgency(selectedCause.urgency_level)}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedCause.detailed_description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-gray-600">
                    <p>
                      <span className="text-gray-800">Location:</span>{" "}
                      {selectedCause.location.city},{" "}
                      {selectedCause.location.country}
                    </p>
                    <p>
                      <span className="text-gray-800">Beneficiaries:</span>{" "}
                      {selectedCause.impact_metrics.beneficiaries}{" "}
                      {selectedCause.impact_metrics.metric_description
                        .replace(
                          "students will gain access to digital learning tools",
                          "students",
                        )
                        .replace(
                          "young adults will receive certified technical training annually",
                          "young adults",
                        )
                        .replace(
                          "farming families will increase their crop yields and income",
                          "farming families",
                        )}
                    </p>
                    <p>
                      <span className="text-gray-800">Days Active:</span>{" "}
                      {selectedCause.metrics.days_active}
                    </p>
                    <p>
                      <span className="text-gray-800">Days Remaining:</span>{" "}
                      {selectedCause.metrics.days_remaining}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-slate-50 rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Funding Progress
                  </h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between font-semibold text-gray-700 text-sm">
                      <span>
                        Raised:{" "}
                        <span className="text-blue-600 font-extrabold">
                          {formatCurrency(selectedCause.metrics.raised_amount)}
                        </span>
                      </span>
                      <span>
                        Goal:{" "}
                        <span className="text-gray-800 font-extrabold">
                          {formatCurrency(selectedCause.metrics.goal_amount)}
                        </span>
                      </span>
                    </div>
                    {renderProgress(selectedCause.metrics.percentage_funded)}
                    <p className="text-sm text-gray-500 font-medium">
                      <span className="text-gray-900 font-semibold">
                        {selectedCause.metrics.donor_count}
                      </span>{" "}
                      donors have contributed so far.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Project Updates
                  </h3>
                  <ul className="space-y-4">
                    {selectedCause.updates.map((update, index) => (
                      <li
                        key={index}
                        className="border-l-2 border-blue-500 pl-4"
                      >
                        <p className="text-sm text-gray-500">{update.date}</p>
                        <h4 className="font-semibold text-gray-800">
                          {update.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {update.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-slate-50 rounded-lg shadow-inner">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Recent Donors
                  </h3>
                  <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {selectedCause.donors.slice(0, 10).map((donor) => (
                      <li
                        key={donor.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm"
                      >
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div>
                            <p className="font-medium text-gray-800">
                              {donor.is_anonymous ? "Anonymous" : donor.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {donor.type} from {donor.location.country}
                            </p>
                          </div>
                        </div>
                        <span className="font-bold text-blue-600">
                          {formatCurrency(donor.amount)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <main className="max-w-7xl mx-auto py-8">
        <section className="px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Fundraising Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500 font-medium">
                  Total Raised
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {formatCurrency(data.fundraising_stats.total_raised)}
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500 font-medium">Total Goal</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(data.fundraising_stats.total_goal)}
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500 font-medium">
                  Active Causes
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.fundraising_stats.active_causes}
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500 font-medium">
                  Total Donors
                </p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.fundraising_stats.total_donors}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 px-4">
            Our Causes
          </h2>
          {selectedCause ? <CauseDetails /> : <CausesList />}
        </section>
      </main>
    );
  };

  const AboutUsPage = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About {data.company_info.name}
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          {data.company_info.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Founded:</strong> {data.company_info.founded}
          </p>
          <p>
            <strong>Headquarters:</strong> {data.company_info.headquarters}
          </p>
          <p>
            <strong>Industry:</strong> {data.company_info.industry}
          </p>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Thank you for your interest in Amana Fundraising. You can reach out to
          us using the information below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              General Inquiries
            </h3>
            <p className="text-gray-600">Email: info@amanafund.org</p>
            <p className="text-gray-600">Phone: +962-6-555-5555</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Media & Partnerships
            </h3>
            <p className="text-gray-600">Email: partners@amanafund.org</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutUsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm py-4 md:py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600">
            {data.company_info.name}
          </h1>
          <nav className="flex space-x-4 md:space-x-8">
            <button
              onClick={() => {
                setView("home");
                setSelectedCause(null);
              }}
              className={`font-semibold transition-colors ${
                view === "home"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Causes
            </button>
            <button
              onClick={() => setView("about")}
              className={`font-semibold transition-colors ${
                view === "about"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setView("contact")}
              className={`font-semibold transition-colors ${
                view === "contact"
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
      {renderContent()}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Amana Fundraising. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

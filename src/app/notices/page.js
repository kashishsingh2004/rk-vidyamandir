export default function NoticesPage() {
  const notices = [
    {
      date: "January 30, 2025",
      title: "Admission Open for Academic Year 2025-26",
      content:
        "Admissions are now open for all classes from Nursery to Class X. Limited seats available. Interested parents can collect application forms from the school office or apply online through our website.",
      type: "admission",
      important: true,
    },
    {
      date: "January 28, 2025",
      title: "Annual Sports Day - February 15, 2025",
      content:
        "Our annual sports day will be held on February 15, 2025, starting at 9:00 AM. Parents are cordially invited to witness their children&apos;s participation in various sports events.",
      type: "event",
      important: false,
    },
    {
      date: "January 25, 2025",
      title: "Parent-Teacher Meeting Scheduled",
      content:
        "Parent-Teacher Meeting for all classes will be conducted on February 5, 2025, from 10:00 AM to 1:00 PM. Parents are requested to attend and discuss their child&apos;s academic progress with respective teachers.",
      type: "academic",
      important: true,
    },
    {
      date: "January 22, 2025",
      title: "School Timing Change - Winter Schedule",
      content:
        "Due to winter season, school timings have been revised. New timings: 9:00 AM to 2:30 PM (Monday to Friday), 9:00 AM to 12:30 PM (Saturday). This will be effective from February 1, 2025.",
      type: "general",
      important: false,
    },
    {
      date: "January 20, 2025",
      title: "Science Exhibition - February 10, 2025",
      content:
        "Annual Science Exhibition will be organized on February 10, 2025. Students from Classes VI to X are encouraged to participate and showcase their scientific projects and innovations.",
      type: "academic",
      important: false,
    },
    {
      date: "January 18, 2025",
      title: "Fee Payment Reminder",
      content:
        "Parents are reminded that the fee for the month of February 2025 is due by January 31, 2025. Late fee charges will be applicable after the due date. Please ensure timely payment.",
      type: "fee",
      important: true,
    },
    {
      date: "January 15, 2025",
      title: "Republic Day Celebration",
      content:
        "Republic Day will be celebrated in the school premises on January 26, 2025, at 9:00 AM. All students are required to attend in proper school uniform. Cultural program will follow the flag hoisting ceremony.",
      type: "event",
      important: false,
    },
    {
      date: "January 12, 2025",
      title: "Mathematics Olympiad Registration",
      content:
        "Registration for Inter-School Mathematics Olympiad is now open for Classes III to X. Interested students can register with their respective class teachers by January 30, 2025. Registration fee: ₹100.",
      type: "academic",
      important: false,
    },
    {
      date: "January 10, 2025",
      title: "Health Check-up Camp",
      content:
        "A comprehensive health check-up camp will be organized in school on February 3, 2025, in collaboration with local health department. All students will undergo basic health screening.",
      type: "health",
      important: false,
    },
    {
      date: "January 8, 2025",
      title: "New Library Books Available",
      content:
        "New collection of books including story books, reference materials, and educational magazines have been added to the school library. Students are encouraged to make use of these resources.",
      type: "general",
      important: false,
    },
  ];

  const getNoticeTypeColor = (type) => {
    const colors = {
      admission: "#e74c3c",
      academic: "#3498db",
      event: "#f39c12",
      fee: "#e67e22",
      health: "#27ae60",
      general: "#9b59b6",
    };
    return colors[type] || "#34495e";
  };

  const getNoticeTypeIcon = (type) => {
    const icons = {
      admission: "🎓",
      academic: "📚",
      event: "🎉",
      fee: "💳",
      health: "🏥",
      general: "📢",
    };
    return icons[type] || "📄";
  };

  return <></>; // keeping this empty for now to avoid incomplete UI
}

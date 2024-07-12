const sessions = [
  {
    category: "Couple",
    title: "Couples Therapy",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
    icon: "❤️", // Placeholder for the actual icon
  },
  {
    category: "Individual",
    title: "Relationship Issues",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
    icon: "🤝", // Placeholder for the actual icon
  },
  {
    category: "Individual",
    title: "Self-image Issues",
    description:
      "All of us want to feel loved and when we feel disconnected or stuck in a relationship it colors our want to when we feel entire lookout.",
    icon: "🪞", // Placeholder for the actual icon
  },
  {
    category: "Individual",
    title: "Work Stress",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new cloud solution.",
    icon: "💼", // Placeholder for the actual icon
  },
  {
    category: "Family",
    title: "Grief/Loss",
    description:
      "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.",
    icon: "💔", // Placeholder for the actual icon
  },
  {
    category: "Individual",
    title: "Trauma Recovery",
    description:
      "Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web enabled.",
    icon: "🛠", // Placeholder for the actual icon
  },
];

const SessionTypes = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="text-center text-orange-500 font-body uppercase tracking-widest mb-2">
        our services
      </h3>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-display font-semibold mb-6">
          Our Session Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start mb-4 flex-col ">
                <p className="text-sm text-orange-500 font-body">
                  {session.category}
                </p>
                <div className="flex">
                  <div className="text-xl">{session.icon}</div>
                  <div>
                    <h3 className="text-lg font-display font-semibold">
                      {session.title}
                    </h3>
                  </div>
                </div>
              </div>
              <p className="font-body text-sm">{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionTypes;

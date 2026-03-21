import Foundation

struct MeditationSession: Identifiable {
    let id = UUID()
    let title: String
    let description: String
    let duration: Int
    let focus: String
    let level: String

    static let sample: [MeditationSession] = [
        MeditationSession(
            title: "Morning Reset",
            description: "Start your day with a grounding meditation that settles the mind and energizes the body.",
            duration: 10,
            focus: "Breath & focus",
            level: "Beginner"
        ),
        MeditationSession(
            title: "Stress Release",
            description: "Let go of tension with a slow body scan and relaxing visualization.",
            duration: 15,
            focus: "Relaxation",
            level: "All levels"
        ),
        MeditationSession(
            title: "Deep Sleep",
            description: "Prepare for rest with a calming countdown and soothing soundscape.",
            duration: 20,
            focus: "Sleep",
            level: "Beginner"
        )
    ]
}

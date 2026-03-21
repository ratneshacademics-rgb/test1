import SwiftUI

struct SessionDetailView: View {
    let session: MeditationSession
    @State private var isFavorite = false

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 20) {
                VStack(alignment: .leading, spacing: 8) {
                    Text(session.title)
                        .font(.largeTitle.weight(.bold))

                    Text(session.focus)
                        .font(.headline)
                        .foregroundStyle(.secondary)
                }

                BreathingCircleView(isAnimating: true)
                    .frame(height: 200)

                Text(session.description)
                    .font(.body)
                    .foregroundStyle(.secondary)

                VStack(alignment: .leading, spacing: 12) {
                    Label("Duration: \(session.duration) minutes", systemImage: "clock")
                    Label("Level: \(session.level)", systemImage: "sparkles")
                    Label("Audio guide", systemImage: "headphones")
                }
                .font(.subheadline)

                Button {
                    isFavorite.toggle()
                } label: {
                    Label(isFavorite ? "Saved" : "Save for later", systemImage: isFavorite ? "bookmark.fill" : "bookmark")
                        .frame(maxWidth: .infinity)
                }
                .buttonStyle(.borderedProminent)
            }
            .padding()
        }
        .navigationTitle("Session")
        .navigationBarTitleDisplayMode(.inline)
    }
}

#Preview {
    NavigationStack {
        SessionDetailView(session: MeditationSession.sample[0])
    }
}

import SwiftUI

struct HomeView: View {
    private let sessions = MeditationSession.sample

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 20) {
                    VStack(alignment: .leading, spacing: 8) {
                        Text("Good evening")
                            .font(.title2)
                            .foregroundStyle(.secondary)

                        Text("Find your calm")
                            .font(.largeTitle.weight(.bold))
                    }

                    FeaturedSessionCard(session: sessions.first)

                    Text("Today\'s sessions")
                        .font(.title3.weight(.semibold))

                    ForEach(sessions) { session in
                        NavigationLink {
                            SessionDetailView(session: session)
                        } label: {
                            SessionRow(session: session)
                        }
                        .buttonStyle(.plain)
                    }
                }
                .padding()
            }
            .navigationTitle("Meditate")
        }
    }
}

#Preview {
    HomeView()
}

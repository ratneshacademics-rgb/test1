import SwiftUI

struct FeaturedSessionCard: View {
    let session: MeditationSession?

    var body: some View {
        if let session {
            VStack(alignment: .leading, spacing: 12) {
                Text("Featured")
                    .font(.caption.weight(.semibold))
                    .foregroundStyle(.secondary)

                Text(session.title)
                    .font(.title2.weight(.bold))

                Text(session.description)
                    .foregroundStyle(.secondary)
                    .lineLimit(2)

                HStack {
                    Label("\(session.duration) min", systemImage: "clock")
                        .font(.subheadline)
                        .foregroundStyle(.secondary)

                    Spacer()

                    Text(session.focus)
                        .font(.subheadline.weight(.semibold))
                        .padding(.horizontal, 10)
                        .padding(.vertical, 6)
                        .background(.white.opacity(0.25), in: Capsule())
                }
            }
            .padding()
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(
                LinearGradient(
                    colors: [Color.teal.opacity(0.6), Color.blue.opacity(0.4)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                ),
                in: RoundedRectangle(cornerRadius: 20)
            )
            .foregroundStyle(.white)
        }
    }
}

#Preview {
    FeaturedSessionCard(session: MeditationSession.sample[0])
        .padding()
}

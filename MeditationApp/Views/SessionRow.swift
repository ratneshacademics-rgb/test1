import SwiftUI

struct SessionRow: View {
    let session: MeditationSession

    var body: some View {
        HStack(spacing: 16) {
            VStack(alignment: .leading, spacing: 6) {
                Text(session.title)
                    .font(.headline)

                Text(session.focus)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            Text("\(session.duration) min")
                .font(.footnote.weight(.semibold))
                .padding(.horizontal, 10)
                .padding(.vertical, 6)
                .background(.teal.opacity(0.15), in: Capsule())
        }
        .padding()
        .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 16))
    }
}

#Preview {
    SessionRow(session: MeditationSession.sample[0])
        .padding()
}

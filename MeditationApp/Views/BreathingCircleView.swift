import SwiftUI

struct BreathingCircleView: View {
    let isAnimating: Bool

    var body: some View {
        ZStack {
            Circle()
                .fill(
                    RadialGradient(
                        colors: [Color.teal.opacity(0.5), Color.blue.opacity(0.2)],
                        center: .center,
                        startRadius: 20,
                        endRadius: 120
                    )
                )
                .overlay(
                    Circle()
                        .stroke(Color.white.opacity(0.3), lineWidth: 2)
                )
                .scaleEffect(isAnimating ? 1.05 : 0.9)
                .animation(.easeInOut(duration: 4).repeatForever(autoreverses: true), value: isAnimating)

            VStack(spacing: 6) {
                Text(isAnimating ? "Breathe" : "Ready")
                    .font(.headline.weight(.semibold))
                Text(isAnimating ? "Inhale • Exhale" : "Tap start")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }
        }
    }
}

#Preview {
    BreathingCircleView(isAnimating: true)
        .frame(width: 220, height: 220)
}

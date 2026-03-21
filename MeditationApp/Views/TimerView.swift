import SwiftUI

struct TimerView: View {
    @State private var selectedMinutes = 10
    @State private var remainingSeconds = 600
    @State private var isRunning = false
    private let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()

    var body: some View {
        VStack(spacing: 24) {
            VStack(spacing: 8) {
                Text("Mindful Timer")
                    .font(.title.weight(.bold))

                Text("Choose a length and begin")
                    .foregroundStyle(.secondary)
            }

            BreathingCircleView(isAnimating: isRunning)
                .frame(width: 220, height: 220)

            Text(timeString(from: remainingSeconds))
                .font(.system(size: 48, weight: .semibold, design: .rounded))
                .monospacedDigit()

            Picker("Duration", selection: $selectedMinutes) {
                ForEach([5, 10, 15, 20, 30], id: \.self) { minutes in
                    Text("\(minutes) min")
                        .tag(minutes)
                }
            }
            .pickerStyle(.segmented)
            .padding(.horizontal)
            .onChange(of: selectedMinutes) { newValue in
                resetTimer(minutes: newValue)
            }

            HStack(spacing: 16) {
                Button(isRunning ? "Pause" : "Start") {
                    isRunning.toggle()
                }
                .buttonStyle(.borderedProminent)

                Button("Reset") {
                    resetTimer(minutes: selectedMinutes)
                    isRunning = false
                }
                .buttonStyle(.bordered)
            }
        }
        .padding()
        .onReceive(timer) { _ in
            guard isRunning else { return }
            if remainingSeconds > 0 {
                remainingSeconds -= 1
            } else {
                isRunning = false
            }
        }
    }

    private func resetTimer(minutes: Int) {
        remainingSeconds = minutes * 60
    }

    private func timeString(from totalSeconds: Int) -> String {
        let minutes = totalSeconds / 60
        let seconds = totalSeconds % 60
        return String(format: "%02d:%02d", minutes, seconds)
    }
}

#Preview {
    TimerView()
}

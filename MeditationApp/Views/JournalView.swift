import SwiftUI

struct JournalView: View {
    @State private var entry = ""
    @State private var mood = "Centered"
    private let moods = ["Centered", "Grateful", "Sleepy", "Restless", "Inspired"]

    var body: some View {
        NavigationStack {
            Form {
                Section("Mood") {
                    Picker("Mood", selection: $mood) {
                        ForEach(moods, id: \.self) { mood in
                            Text(mood)
                        }
                    }
                    .pickerStyle(.menu)
                }

                Section("Reflection") {
                    TextEditor(text: $entry)
                        .frame(minHeight: 160)
                        .overlay(
                            RoundedRectangle(cornerRadius: 12)
                                .stroke(.teal.opacity(0.2))
                        )
                        .padding(.vertical, 4)
                }

                Section {
                    Button("Save Entry") {
                        entry = ""
                    }
                    .frame(maxWidth: .infinity, alignment: .center)
                }
            }
            .navigationTitle("Journal")
        }
    }
}

#Preview {
    JournalView()
}

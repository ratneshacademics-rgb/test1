import SwiftUI

struct ContentView: View {
    @State private var selectedTab = 0

    var body: some View {
        TabView(selection: $selectedTab) {
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "house")
                }
                .tag(0)

            TimerView()
                .tabItem {
                    Label("Timer", systemImage: "timer")
                }
                .tag(1)

            JournalView()
                .tabItem {
                    Label("Journal", systemImage: "book.closed")
                }
                .tag(2)
        }
        .accentColor(.teal)
    }
}

#Preview {
    ContentView()
}

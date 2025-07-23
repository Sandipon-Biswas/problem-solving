#include <iostream>
#include <string>
//
using namespace std;

int main() {
    int t;
    cin >> t;

    while (t--) {
        string s;
        cin >> s;

        string c = "";
        string e = "";
        e = e + s[3] + s[4];
        c = c + s[0] + s[1];
        int ii = stoi(c);

        if (ii == 0) {
            cout << "12" << ":" << e << " AM" << endl;
        } else if (ii < 12) {
            cout << s << " AM" << endl;
        } else if (ii == 12) {
            cout << s << " PM" << endl;
        } else {
            cout << "0" << ii - 12 << ":" << e << " PM" << endl;
        }
    }

    return 0;
}

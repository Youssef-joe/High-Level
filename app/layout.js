import Header from "./(components)/Header";
import Sidebar from "./(components)/Sidebar";
import StuffTable from "./(components)/StuffTable";
import UserTable from "./(components)/UserTable";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          {children}
        
      </body>
    </html>
  );
}

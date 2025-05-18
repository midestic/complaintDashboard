  Lapo Complaint Log

A modern complaint logging and management system built with   Next.js 13+ App Router  ,   TypeScript  ,   Tailwind CSS  , and   Bootstrap  .  
This project allows users to log complaints, view pending and resolved complaints, and manage complaint details in a responsive dashboard.

   

   Table of Contents

 

   

   Features

    Log Complaints:   Users can submit new complaints via a modal form.
    View Complaints:   Switch between pending and resolved complaints.
    Responsive Sidebar:   Navigation adapts for mobile and desktop.
    Bootstrap & Tailwind:   Uses both for flexible, modern UI.
    Query based Routing:   Complaint details are passed via URL query parameters.
    TypeScript:   Type safety throughout the codebase.

   

   Project Structure

   
lapocomplaint/
├── app/
│   ├── components/
│   │   └── BootstrapClient.tsx
│   ├── complain/
│   │   ├── ComplainBox.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Modals/
│   │   └── ComplaintModal.tsx
│   ├── PR.tsx
│   ├── Sidebar.tsx
│   └── Routes.tsx
├── public/
│   └── images/
│       ├── logo.png
│       └── cardinfra.png
├── styles/
│   └── globals.css
├── package.json
└── README.md
   

   

   Key Files Explained

     app/layout.tsx 
  The root layout for the app.
  Imports Bootstrap and global CSS.
  Renders the  Sidebar ,  BootstrapClient , and the main content.

     components/Sidebar.tsx 
  Responsive sidebar navigation.
  Uses React Icons for menu toggling.
  Shows/hides navigation on mobile.

     components/PR.tsx 
  Handles switching between pending and resolved complaints.
  Uses state to render the appropriate table.
  Contains the button to open the complaint modal.

     components/Modals/ComplaintModal.tsx 
  Modal form for logging a new complaint.
  Uses controlled inputs and submits data via query parameters.
  Navigates to  /complain  with the complaint details.

     app/complain/page.tsx 
  The page that displays complaint details.
  Wraps  ComplainBox  in a  <Suspense>  boundary for client side hooks.

     app/complain/ComplainBox.tsx 
  Reads complaint details from the URL using  useSearchParams .
  Displays all complaint information in a styled card.

     app/components/BootstrapClient.tsx 
  Dynamically imports Bootstrap JS for modal functionality.
  Uses a  useEffect  hook to load Bootstrap only on the client.

   

   Getting Started

1.   Clone the repository:  
      bash
   git clone https://github.com/yourusername/lapocomplaint.git
   cd lapocomplaint
      

2.   Install dependencies:  
      bash
   npm install
      

3.   Run the development server:  
      bash
   npm run dev
      

4.   Open [http://localhost:3000](http://localhost:3000) in your browser.  

   

   Usage

  Click   Log Complaint   to open the modal and submit a new complaint.
  Switch between   Pending   and   Resolved   tabs to view complaints.
  Complaint details are shown on the  /complain  page, populated from URL query parameters.

   

   Customization

    Sidebar:   Edit  components/Sidebar.tsx  to add or remove navigation links.
    Tables:   Customize  PendingTable  and  ResolvedTable  components as needed.
    Styling:   Modify Tailwind classes or add custom CSS in  styles/globals.css .
    Images:   Replace logos in  public/images/ .

   

   Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

   


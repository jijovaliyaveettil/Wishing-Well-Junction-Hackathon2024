## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

-----------------------------------------------------
About the Project Idea:

User joins the our company app 
- if currently an employee with a company  with the employee email id 
    - If the user leaves a review , this email id will be used to authenticate if the user actually worked there 
    - The benefit of leaving a user review with the employee id is that the person will get free match makings for certain duration
- If not then with his personal email id
    - This user can leave a review about a company but the trust score of this review would be less


Data Collection about the company from its employees
- From social media sources such as X,LinkedIn,etc
- From discussion forums such as reddit, quota, etc
- From job portals such as indeed, glass door, etc

The collected data would be used to analyze and then we would extract the sentiment behind the different topics of mental well being mentioned in the review

Data collection about the company from the company
- The company website and the values advertised there
- Company social media handles where they advertise their current values and standings on social issues
- Press releases and annual reports

The collected data would then be used generate keywords based on the amount of times it was mentioned on oil the above and then have a score of how important they consider those values 

Next we would compare them and create a new index called the adherence score which would be attached to each company profile where we could showcase the advertised values and based on the employee reviews how much percentage of employees agree with it.

The match making environment
- Based on the users preferences of the values they will be matched with companies that have the identical values and that they also give the same amount of importance to those values as the user

Since we already have collected some data about different companies and the user reactions on different values of the companies, we can use them to give insights to partnered companies about the recent trends of the employee needs from similar industries 

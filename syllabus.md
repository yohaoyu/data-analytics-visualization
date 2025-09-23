---
layout: minimal
title: Syllabus
description: Syllabus.
---

<button id="toc-toggle"><i class="fa-solid fa-bars"></i></button>
1. TOC
{:toc}

{% include course_header.html %}
# Syllabus
{:.no_toc}


{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

## Overview
Real estate decision-making requires the assessment of interdisciplinary datasets, which include socioeconomic, financial, and environmental data. Determining evolving patterns, analyzing and visualizing them, is critical in holistically assessing an area and a real estate decision to be made. This course aims to provide you with an opportunity to improve your coding ability and demonstrate that using [R](https://www.r-project.org) is more replicable and efficient than Excel.

We will work in groups to solve tricky data analytics & visualization problems. Of course, we will encounter a lot of new commands and new ways of thinking about how data is organized. However, we will most importantly learn how to understand the process of data analysis and how to best inform our audience and honestly describe the underlying data. The course is developed based on materials from [Dr. Feiyang Sun at UC San Diego](https://fsun.ucsd.edu/), Siman Ning, and Christian Phillips. 


## Learning Objectives 
After successfully completing this course, you should be able to:

1. Create, debug, debug again, then submit scripts to perform data analysis in R using RStudio
2. Import data in variety of formats; including interacting with APIs to access public databases
3. Be more aware of the real estate data landscape in the US, Washington, and the Puget Sound region
4. Wrangle data using the tidyverse package; manipulate, combine, and collapse datasets
5. Map data and understand the challenges when working with spatial data
6. Interpret data visualizations, document, and present your data analysis using R Markdown
7. Understand the basic taxonomy of a data analysis methods and conduct regression and basic machine learning models
8. Know essential concepts in deep learning and artificial intelligence
9. Understand ethical challenges in applying AI and data science to real-world contexts

Overall, students are expected to gain proficiency in identifying the appropriate analysis and visual method based on the dataset they have and the message they would like to convey.


## Pre-requisites
- Basic knowledge of statistics is required (e.g., R E 506, URBAN 520, STAT 221).
- Basic knowledge of any programming language (e.g., CS&SS 508, CSE 160) is recommended but not required.

## Readings and Class Materials

- **Class slides** for every lecture will be posted on the course website before the lectures. 
- **Required readings** are identified for each class and should be completed as preparation before coming to class.
- **Optional readings** are useful for the class topics, and I encourage you to read them before the class. Some resources related to coding will be listed on the lab pages.

### Reference Text

- [Real Estate Analysis in the Information Age: Techniques for Big Data and Statistical Modeling]({{ site.baseurl }}/re-in-information-age) - by Kimberly Winson-Geideman, Andy Krause, Clifford A. Lipscomb, Nick Evangelopoulos (2018).
- [Visualize This: The FlowingData Guide to Design, Visualization, and Statistics](https://www.wiley.com/en-us/Visualize+This%3A+The+FlowingData+Guide+to+Design%2C+Visualization%2C+and+Statistics%2C+2nd+Edition-p-9781394214860) - by Nathan Yau (2024)
- [Data Visualization: A Practical Introduction](https://press.princeton.edu/books/hardcover/9780691181615/data-visualization?srsltid=AfmBOoogKnXuOrY1HeepuYDVq4UVDMgUn_wpWWyQpNY18sIJFCrxYY9p) - by Kieran Healy (2019)
- [Modern Data Science with R](https://mdsr-book.github.io/mdsr3e/) - by Benjamin S. Baumer, Daniel T. Kaplan, and Nicholas J. Horton (2024)


## Computing

No previous programming experience is required, but appreciated. All required analytics applications will be in R/RStudio or Python. We will have an installation session during the first class.

Bring your computer (Windows, MacBook, or Linux is acceptable) to each class. If you have any trouble with having a computer, you may check the computing resources from [the college](https://be.uw.edu/spaces/computing/), [Student Technology Loan Program](https://stlp.uw.edu), or [UW libraries computer service](https://www.lib.washington.edu/services/computers/computers). Students are also welcome to conduct any needed computer-based work in the Digital Commons in the basement of Gould Hall or other computer labs on campus.


## Course Requirements

| **Labs**                       |   64 %   |
| **Data Analytics and Visualization Projects**             |   30 %   |
| **Participation**              |   6 %    |
| **Extra Credits**              |   3 %    |

According to the estimates for UW courses, it should take about **9** hours of work to complete a three-credit class each week. If you spend more than 5 hours beyond the classroom, please let us know, and we will adjust the study plans for you.  

The total scores will be curved and transformed into the UW numerical grading system for graduate courses, ranging from 4.0 to 1.7 in 0.1 increments as the final grade.

**Late days**: You will have **6** penalty-free late days in total (max 3 late days per assignment). Any delayed submission after the first 3 days will be penalized 10% per day for that specific assignment (but will not count towards your used late days). Note: Late days CANNOT be used for the project presentation and final delivery. 


### Labs (64%)

There will be a total of 8 labs and 8% each for each lab. Each lab will take approximately one week, and the expected finish time is around 1~2 hours after class. You only need to submit once after each lab via [Canvas](http://canvas.uw.edu). Each student is expected to submit their own lab, but study groups are allowed. But you're expected to acknowledge the names of collaborators along with a short description of the types of collaborations being done at the beginning of each lab submission. You may use generative AI tools such as Co-Pilot and ChatGPT, but please check the AI policy section. 

All labs will be due at 11:59 pm Pacific Time and should be submitted on Canvas or GitHub. The submission should include Rmd, HTML, and any other files required to rerun the code.

### Data Analytics and Visualization Projects  (30%)

See the details in the <a href="{{ site.baseurl }}/projects">Data Analytics and Visualization Projects</a> page. 

### Participation (6%)

There will be several surveys and in-class quizzes, which will be graded on completion. It is highly recommended that students attend the course regularly, as the sessions will be offered synchronously and will not be recorded. We will use class time to do the necessary activities. Class attendance and participation are integral parts of this course; much of the key material will be introduced and discussed in lectures. 

### Extra Credits (up to 3%)

There will be two ways to receive extra credits:

- **Dataset sharing (2%)**
  - From week 2 to 6, share high-quality datasets directly related to real estate and housing on [Ed Discussion](https://edstem.org). 
  - The dataset cannot be repeated with the previous datasets shared by other students. 
  - 5 unique datasets to receive 2%, 3 unique datasets to receive 1%.
  - Any unique dataset will be listed on the <a href="{{ site.baseurl }}/resources/#datasets">Resources</a> page for others to refer to. 
- **Course evaluation (1%)**
  - We will leave some time in the last class to participate in the anonymous course evaluation. 



## Communication and Community Forum
You can reach us via [Ed Discussion](https://edstem.org), email, and in person during class and office hours. Please use the [Ed Discussion](https://edstem.org) as the first place to ask general questions. If you have a question about the course material or assignment, other students may have the same question. If you email me with a question like this, I will ask you to post it on the discussion board. I will review the discussion board at least once a day (weekdays). I also encourage students to answer each other’s questions on the discussion board. For emails, we try to reply to emails within 24 hours, 48 hours over a weekend, and the workday following a holiday unless otherwise noted. Simple questions will be answered by [Ed Discussion](https://edstem.org) or email, but students may be asked to schedule a meeting for more complex discussions.

 

## Course Evaluation 

Formal course evaluation occurs at the end of the quarter, university-widely. If you are experiencing a problem with the class, please let me know as soon as possible, as I might be able to make changes if needed within the course of the class.


## Statistics and Data Science @ UW

The University of Washington is the leading institution in statistics and data science in the Pacific Northwest, in the United States, and in the world. We are lucky to be here and have the chance to enjoy the invaluable resources from the university and the Seattle region. Here are some resources if you hope to learn more about statistics and data science at UW. Be free to reach out to me if you have further thoughts or any questions. 

- **Coursework**
  - [CSE 583 Software Development for Data Scientists](http://uwseds.github.io )
  - [CSSS 508 Introduction to R for Social Scientists](https://clanfear.github.io/CSSS508/)
  - [CSE 512 Data Visualization](https://courses.cs.washington.edu/courses/cse512/)
  - [CSSS 569 Visualizing Data and Models](https://faculty.washington.edu/cadolph/vis)
  - [STAT 509 Introduction to Mathematical Statistics](https://stat.uw.edu/academics/course-catalog/stat-509)
- **Institutes and Centers**
  - [eScience Institute (Data Science)](https://escience.washington.edu)
  - [Center for Studies in Demography and Ecology](https://csde.washington.edu)
  - [Center for Statistics and the Social Sciences](https://csss.uw.edu)
  - [Center for Social Science Computation and Research](https://depts.washington.edu/csscr/)


## Academic Integrity 
The University of Washington expects students to know their responsibilities and maintain the highest academic conduct standards (WAC 478-121). Students are held responsible for any violation of the University of Washington Student Code, irrespective of whether the violation was intentional or not. Students suspected of cheating or otherwise violating the misconduct code will be referred to the College disciplinary process. Behaving with integrity is part of our responsibility to our shared learning community. If you’re uncertain about whether something is academic misconduct, ask me. I am willing to discuss questions you might have. Acts of academic misconduct may include, but are not limited to:

- Cheating (working collaboratively on quizzes and exams, sharing answers, etc.).
- Plagiarism (using another person’s words or ideas without proper citation).
- Unauthorized collaboration (working with others on assignments without acknowledgment).
- Concerns about these or other behaviors prohibited by the Student Conduct Code will be referred for investigation and adjudication.

## Use of AI

In this course, students are permitted to use AI-based tools (such as ChatGPT) on some assignments. The instructions for each assignment will include information about whether and how you may use AI-based tools to complete the assignment. All sources, including AI tools, must be properly cited. Detailed citation guidelines can be found at the [UW Law Library](https://lib.law.uw.edu/bluebook101/genai), [MIT Libraries](https://libguides.mit.edu/cite-AI-tools), and the [UMD Libraries](https://lib.guides.umd.edu/c.php?g=1340355&p=9896961). Using AI in ways inconsistent with the parameters above will be considered academic misconduct and subject to investigation.

Please note that AI results can be biased and inaccurate. It is your responsibility to ensure that the information you use from AI is accurate. Additionally, pay attention to the privacy of your data. Many AI tools will incorporate and use any content you share, so be careful not to unintentionally share copyrighted materials, original work, or personal information.

Learning how to thoughtfully and strategically use AI-based tools may help you develop your skills, refine your work, and prepare you for your future career. If you have any questions about citations or about what constitutes academic integrity in this course or at the University of Washington, please feel free to contact me to discuss your concerns.

According to the academic integrity requirements, we prohibit the use of AI-based tools to directly complete assignments, as well as conducting discussions and reflections in any section during class. However, we encourage students to use generative AI tools to assist with coding, debugging, and understanding class content. 

You may use generative AI tools such as ChatGPT, as you would use a human collaborator. This means that you may NOT directly ask generative AI tools for answers or copy solutions. You're required to acknowledge generative AI tools as collaborators and include a paragraph describing how you used the tool. The use of generative AI tools to substantially complete an assignment or exam (e.g., by directly copying) is prohibited and will result in honor code violations. We will be checking students' assignments to enforce this policy.


## Disability Resources for Students (DRS)
Your experience in this class is important to me. It is the policy and practice of the University of Washington to create inclusive and accessible learning environments consistent with federal and state law. If you have already established accommodations with [Disability Resources for Students (DRS)](https://depts.washington.edu/uwdrs/), please activate your accommodations via myDRS so we can further discuss.

If you have not yet established services through DRS but have a temporary health condition or permanent disability that requires accommodations (conditions include but are not limited to mental health, attention-related, learning, vision, hearing, physical, or health impacts), contact DRS directly to set up an Access Plan. DRS facilitates the interactive process that establishes reasonable accommodations. 

## Campus Safety

Call SafeCampus at 206-685-7233 to anonymously discuss safety and well-being concerns for yourself or others. SafeCampus’s team of caring professionals will provide individualized support, while discussing short- and long-term solutions and connecting you with additional resources when requested.


## Religious Accommodation Policy
Washington state law requires that UW develop a policy for the accommodation of student absences or significant hardship due to reasons of faith or conscience, or for organized religious activities. The UW’s policy, including more information about how to request an accommodation, is available at the [Religious Accommodations Policy](https://registrar.washington.edu/staffandfaculty/religious-accommodations-policy/). Accommodations must be requested within the first two weeks of this course using the [Religious Accommodations Request form](https://registrar.washington.edu/students/religious-accommodations-request/).

{% include course_footer.html %}

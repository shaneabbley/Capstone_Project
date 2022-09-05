# Capstone_Project

- *Project Topic*

The relation between good and bad lifestyle choices as it relates to the incidence and outcome of cancer

- *Reasons why we selected this topic*

There are a lot of different types of cancers and there's a lot of data being generated for this. It will be interesting to see if there are any factors that are associated with higher cancer incidence

## Project Outline
1. Find and clean data
2. Analyze data to determine which ML model will work best for our dataset 
3. Run various models using Supervised Machiene Learning techiniques.
4. Create ERD with relationships for database.
5. Create database in PGAdmin.
6. Determine how the database will interact with the model.
7. Create tables, join and connection string bewteen database and the model.
8. Create the blueprint for the dashboard and add storyboard to Google Slides. - Creating two databases
9. Evaluate what tools will be used to create dashboard.
10. Create vizualizations for dashboard.
11. Disucss results of analysis- what are the top 3 symtoms for each level of cancer severity?
12. Analyze what could have been done better for optimum results.


## Communication Protocols

Individual slack group to message and keep in touch, planning in google docs, and zoom calls to track group progress. We have been meeting Mondays and Wednesdays for 30 minutes before class time to connect and discuss indivdual updates that we would like to share with the team.

## Data Source

https://www.kaggle.com/datasets/rishidamarla/cancer-patients-data

This is an excel document that list hundreds of cancer patient lifestlye.  This includes a combination of lifestlye choices and symptoms presented in each patient.  There are a total of 25 columns and 1000 rows within this dataset.

## Data Exploration
- We are using a cleaned verison of “Cancer Patients Data” which is the excel file gathered from Kaggle. We converted this excel file to a csv and removed columns that represented symptoms as those would not be useful in our analysis. After doing this, weare left with the columns shown here.
![Screen Shot 2022-08-28 at 2 07 30 PM](https://user-images.githubusercontent.com/103154070/187778715-8747f6a1-5f50-4879-a4ca-c5fd8ff24447.png)

-   We also renamed the labels for the “Cancer Severity” column; replacing “Low,” “Medium,” and “High” with “1,  2 and 3” respectively. This step was completed in order to prevent any ValueErrors that we may receive while completing our analysis.

## Data Analysis 


Here are a few preliminary questions:
1. Is there any lifestyle choice that is connected to higher incidence of cancer
2. Is there any lifestyle choice associated with more severe outcomes of cancer
3. Are there multiple lifestyle factors that are associated higher incidence

In order to calculate the amount of patients per cancer severity level, we grouped the data by the level and counted the number of values per level.  After obtaining our values we converted our values to percentages and used MatPlotLib to create a pie graph that represents this data as shown below.

<img width="282" alt="levels" src="https://user-images.githubusercontent.com/103154070/188456366-245c8085-655d-401d-b216-6be842ef90f9.png">

![SV](https://user-images.githubusercontent.com/103154070/188456088-5019818c-1b74-4987-8f28-b280c03b03be.png)



We want to learn about patterns between lifestyle choices and the severity of cancer.  Since we now have the breakdown per Severity level, we are curisous to learn more about the values represented within each lifestlye choice.  After conducting the value counts per column within our dataframe we took note of the columns with the highest used level (value of 8).  The top 3 columns with the highest usage level were found to be Smokers, Passive Smokers, and Alcohol Users.



<img width="662" alt="Smoking_DA" src="https://user-images.githubusercontent.com/103154070/188458052-c3debc04-b695-495d-bcc2-91fe1f22aab2.png">

![Smoke](https://user-images.githubusercontent.com/103154070/188457274-dd68a020-daf7-469f-a9a9-5da890e3c1a3.png)

- Notice that more of the patients within our dataset stated that the did not smoke compared those that were the heavier smokers.
- If we calculate the highest two levels compared to our lowest two levels: (89+207) : (181+222) = 296:403 <-- So we can see that more of our patients do not smoke within this dataset.
- Also take note that the heavist smokers were found within cancer severity levels 2 and 3, but not in level 1

<img width="852" alt="Passive_Smoker_DA" src="https://user-images.githubusercontent.com/103154070/188458171-d35b4965-1c79-4a70-8ca5-caa27aa3b834.png">

![Passive](https://user-images.githubusercontent.com/103154070/188457290-1f78c6b9-1900-4b03-a5b8-73e6fe827570.png)

- Within the group of passive smokers there were 108 patients that identified as the heaviest level of passive smoking.  This is higher than those that were found in the smoker column. 
- The highest level of passive smoking (level 8) was only represented in the highest cancer severity level.  
- If we calculate the highest two levels compared to our lowest two levels: (108+187):(60+284)= 295:344 <-- The gap between the highest and lowest is not as significant as the previous group, however, we still have a simular outcome.

<img width="721" alt="Alcohol_use_DA" src="https://user-images.githubusercontent.com/103154070/188458195-bcbe9cdf-a443-42bd-8bb3-3771462763ae.png">

![AU](https://user-images.githubusercontent.com/103154070/188457304-4291249e-c588-4a41-852d-fb8cb074c5b5.png)

- Within the group of alcohol users there were 188 patients that identified as having heavy alcohol comsumption. Those patients are only reflected in cancer severity levels 2 and 3.
- If we calculate the highest two levels compared to our lowest two levels: (188+167):(152+202)= 355:354 <-- These are extremely close.


## Machine Learning Model

*Preliminary Data Preprocessing*

*Preliminary Feature Engineering/Selection*

*Splitting Data into training and testing sets*

*Model Choice Explanation- include limitations and benefits*

*Explanation of any changes that were made to the model*

*Description of how the model was trained*

*Description and explanation of model's confusion matrix-include final accuracy score*

## Dashboard 
*Include link to dash or a video of dash demo*

*Tools Used to Build and Run the Dashboard are as follows*
- Javascript (d3.json)
- Bootstrap components
- HTML
- Visual Studio Code
- Pandas

*Interactive Elements*
- User will be able to input patient ID to see symptom scores and lifestyle choices as a bar graph

## Database 

*Description of interface with the project*
*Description of two tables used*
*Description of join/s*
*Description of connection string*


## Results 

## Reccomendations for Future Analysis
*include anything that we would have done differently*



*Google Slides Presentation*
https://docs.google.com/presentation/d/1w9SX7ncPKxl14IUaS30NbZy669UUpW76sN9ZRtEoHUQ/edit#slide=id.g146a7b7e24b_0_65

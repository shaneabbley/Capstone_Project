# Cancer Predictions


We are seeking an understanding between lifestyle choices as it relates to the incidence and outcome of cancer.  There are many different types of cancer and there's aan abundance of data being generated for this. It will be interesting to see if there are any factors that are associated with higher a cancer incidence.

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


## Communication Protocol

We will be using individual slack group to message and keep in touch, planning in google docs, and zoom calls to track group progress. We have been meeting Mondays and Wednesdays for 30 minutes before class time to connect and discuss indivdual updates that we would like to share with the team.  Our strategy is to have sections of the project that we work on indepently while assuring that we regularly communicate our progress and status updates.

## Data Source

https://www.kaggle.com/datasets/rishidamarla/cancer-patients-data

This is an excel document that list hundreds of cancer patient lifestyle.  This includes a combination of lifestyle choices and symptoms presented in each patient.  There are a total of 25 columns and 1000 rows within this dataset.



## Data Exploration

*Understanding our Data*

<img width="468" alt="database" src="https://user-images.githubusercontent.com/103154070/189386426-9049ab2d-d83b-4b5a-880d-2d939087766c.png">

Within our dataset we have an extensive list of columns that represent a combination of symptoms and lifetyle choices that were provdied by the patients.  We created a SQLlite database to better vizulaize these factors and determine which we would require for our analysis.


We are using a cleaned verison of “Cancer Patients Data” which is the excel file gathered from Kaggle. We converted this excel file to a csv and removed columns that represented symptoms as those would not be useful in our analysis. After doing this, weare left with the columns shown here.
![Screen Shot 2022-08-28 at 2 07 30 PM](https://user-images.githubusercontent.com/103154070/187778715-8747f6a1-5f50-4879-a4ca-c5fd8ff24447.png)

We also renamed the labels for the “Cancer Severity” column; replacing “Low,” “Medium,” and “High” with “1,  2 and 3” respectively. This step was completed in order to prevent any ValueErrors that we may receive while completing our analysis.

## Data Analysis 


Here are a few preliminary questions:
1. Is there any lifestyle choice that is connected to higher incidence of cancer
2. Is there any lifestyle choice associated with more severe outcomes of cancer
3. Are there multiple lifestyle factors that are associated higher incidence

In order to calculate the amount of patients per cancer severity level, we grouped the data by the level and counted the number of values per level.  After obtaining our values we converted our values to percentages and used MatPlotLib to create a pie graph that represents this data as shown below.

<img width="282" alt="levels" src="https://user-images.githubusercontent.com/103154070/188456366-245c8085-655d-401d-b216-6be842ef90f9.png">

![SV](https://user-images.githubusercontent.com/103154070/188456088-5019818c-1b74-4987-8f28-b280c03b03be.png)



We want to learn about patterns between lifestyle choices and the severity of cancer.  Since we now have the breakdown per Severity level, we are curisous to learn more about the values represented within each lifestyle choice.  After conducting the value counts per column within our dataframe we took note of the columns with the highest used level (value of 8).  The top 3 columns with the highest usage level were found to be Smokers, Passive Smokers, and Alcohol Users.



<img width="662" alt="Smoking_DA" src="https://user-images.githubusercontent.com/103154070/188458052-c3debc04-b695-495d-bcc2-91fe1f22aab2.png">

![Smoke](https://user-images.githubusercontent.com/103154070/189126286-3c8bc579-4925-4e13-9599-eaad6050151d.png)



- Notice that more of the patients within our dataset stated that the did not smoke compared those that were the heavier smokers.
- If we calculate the highest two levels compared to our lowest two levels: (89+207) : (181+222) = 296:403 <-- So we can see that more of our patients do not smoke within this dataset.
- Also take note that the heavist smokers were found within cancer severity levels 2 and 3, but not in level 1

<img width="852" alt="Passive_Smoker_DA" src="https://user-images.githubusercontent.com/103154070/188458171-d35b4965-1c79-4a70-8ca5-caa27aa3b834.png">

![Passive](https://user-images.githubusercontent.com/103154070/189126259-c73d81e2-bc6e-4804-a6ce-bac7289631ed.png)



- Within the group of passive smokers there were 108 patients that identified as the heaviest level of passive smoking.  This is higher than those that were found in the smoker column. 
- The highest level of passive smoking (level 8) was only represented in the highest cancer severity level.  
- If we calculate the highest two levels compared to our lowest two levels: (108+187):(60+284)= 295:344 <-- The gap between the highest and lowest is not as significant as the previous group, however, we still have a simular outcome.

<img width="721" alt="Alcohol_use_DA" src="https://user-images.githubusercontent.com/103154070/188458195-bcbe9cdf-a443-42bd-8bb3-3771462763ae.png">

![AU](https://user-images.githubusercontent.com/103154070/189126236-7afee1fe-bf7a-4eac-ae61-3de7b1592c15.png)



- Within the group of alcohol users there were 188 patients that identified as having heavy alcohol comsumption. Those patients are only reflected in cancer severity levels 2 and 3.
- If we calculate the highest two levels compared to our lowest two levels: (188+167):(152+202)= 355:354 <-- These are extremely close.



*What are we interested in predicting*

![PC](https://user-images.githubusercontent.com/103154070/189383560-bfc8e0f3-bbb8-4ad4-ae3a-25cdcab0cdce.png)

We are curious to learn more about the connection between lifestyle choices and their impact on the severity of cancer seen within our dataset.  From this Pearson Correlation we can notice that the strongest connection to cancer severity is obesity.  It is then followed by Alcohol use, Dust Allergy, Balanced Diet, Genetic Risk and Passive Smoker, respectivly.



## Machine Learning Model

*Preliminary Data Preprocessing*

- The data we got from Kaggle had patient id, lifestyle habits , cancel severity(output), and symptoms.
- We cleaned the data by removing the symptoms as our study involves the corelation of lifestyle habits contributing to the cancer severity
- The patient ID had a string in it , so we converted it to integer.
- Next we removed the age as we wanted the model to take into account just the lifestyle habits into consideration.


*Splitting Data into training and testing sets*

- y = CleanedData_df["Cancer Severity"]

- X = CleanedData_df.drop(columns="Cancer Severity")

- X = X.drop(columns="Age")

- X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3, random_state=44, shuffle = True) 
- X_train.shape


*Model Choice Explanation*

- With logistic regression we can solve classification problems with machine learning by estimating the probability a new entry falls in a class. This model will attempt to maximize the conditional likelihood of the training data, but it is highly prone to outliers.  Additionally, by using support vector machines we are able to seperate the data point using a line, which is chosen so that it will be the furthermost from the nearest data points in 2 categories. We chose the logistic regression and the SVM models for predicting the severity level of Cancer as Low, Medium or High. We ran the model with several different solvers and different valuse of iterations. 

![liblinear](https://user-images.githubusercontent.com/103154070/189376274-167f6d9c-4f4b-41eb-86df-86c69388a873.png)
![libfgs](https://user-images.githubusercontent.com/103154070/189376296-3f940ff0-94c3-4aa1-978c-f2cd73be6522.png)

![Newton](https://user-images.githubusercontent.com/103154070/189376385-4b6e03db-1eb3-41e5-9f8d-75a9968cbe6a.png)
![sag](https://user-images.githubusercontent.com/103154070/189376330-1f39f102-3555-4bba-a50a-b58189fe4107.png)

![saga](https://user-images.githubusercontent.com/103154070/189376347-04f38e2d-fb30-4e6f-b1c8-f78c71c6088a.png)
![svg](https://user-images.githubusercontent.com/103154070/189376650-9157daf6-754b-4251-b7d6-7ace579c8e2e.png)



- We received the best results when running the newton-cg solver when using the logistic regressions model (87% Accuracy).  The confusion matrix from this solver shows us that we did not have any patients that were falsly predicted to have a high level of severity with an actual low severity nor did it predict that any had a high level when it was actually a low level. When we compared the results from the newton-cg solver, to those of the SVM model we can see that the SVM model produces a higher accuracy score of 88%.  Now we need to determine which model is actual better for evaluating our data.  Since we do not desire having a high number of false negatives or false positives, we are looking for the best F1-score that the models will provide. 
 
<img width="453" alt="f1svg" src="https://user-images.githubusercontent.com/103154070/189381897-6f9fd9e8-82f8-4e5c-8fc3-d69a86965f4e.png"> <img width="446" alt="flnew" src="https://user-images.githubusercontent.com/103154070/189381792-9543df3b-8e91-4cec-ba2d-81c7b583b908.png">

- We can see that the F1-Scores from both models are very close to one another, however, we selected the SVM model as providing the best predictions for our dataset.


*Pros and Cons of Using these models*

- Pros of Logistic Regression
  - Ability to solve classification problems 
  - It can have different have different decision boundaries with different weights that are near the optimal point
  - Works well with already identified independent variables 
  
- Cons of Logistic Regression
  - Vunerable to overfitting 
  - Highly prone to outliers

- Pros of SVM
  - Tries to find the best margin that seperates the classes that reduce the risk of error on the data
  - Provides the best prediction for the model under study 
  - Decreased risk of overfitting
  
- Cons of SVM
  - As the support vector classifier works by putting data points, above and below the classifying hyperplane there is no probabilistic explanation      for the classification



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

Although we have found trends between lifestyle choices and the severity level of cancer, within this dataset we can not confidently conclude that there are specific lifestyle choices that will impact a person's ability to develop or increase the severity of the disease.  In our prediction attempts, we discovered that a Support Vector Machine model works best with our dataset, providing an f1-score of 1.00 for the highest severity level, 0.83 for the middle severity level, and 0.80 for the lowest severity level.

For a more thorough analysis, it would be helpful to have more context around the lifestyle choices of these patients. Did they increase their engagement in certain choices based on their cancer diagnosis, or were these increased as a result? It would also be beneficial to have a controlled group within our dataset. For example, there could be a group of patients who do not participate in any of the unfavorable/unhealthy lifestyle choices. 


*Google Slides Presentation*
https://docs.google.com/presentation/d/1w9SX7ncPKxl14IUaS30NbZy669UUpW76sN9ZRtEoHUQ/edit#slide=id.g146a7b7e24b_0_65

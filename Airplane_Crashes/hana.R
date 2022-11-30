install.packages("ggiraphExtra")
install.packages("maps")
install.packages("gridExtra")

library(ggplot2)
library(ggiraphExtra)
library(tibble)
library(gridExtra)
library(lubridate)
data <- read.csv("Airplane_Crashes.csv")
head(data)
glimpse(data)


as_datetime("Date")
year("Date")
plot(data, x=Aboard ,y=Fatalities)
Fatalities <- df %>% group_by(Operator) %>% summarize(sum_Fatalities = sum(Fatalities))

library(ggfortify)
library(ggplot2)

Spreadsheet...Sheet1 <- read.csv("~/Downloads/Spreadsheet - Sheet1.csv", header = TRUE)

DataS <- Spreadsheet...Sheet1


ggplot(data = DataS, mapping = aes(x= month, y=children))+
  geom_col()+
  labs(y = "Number of Births ",x="Years")+
  ggtitle("Births Over The Past 20 Years")

ggsave("ColChart.png", path = "/Users/williamkopans/Downloads")


summary(Recent)

ggplot(data= Spreadsheet...Sheet1, mapping = aes(x= month,y=children, group = 1))+
  geom_line()+
  labs(y = "Number of Births ",x="Years")+
  ggtitle("Births Over The Past 20 Years")

ggsave("LineChart.png", path = "/Users/williamkopans/Downloads")



ggplot(data= Spreadsheet...Sheet1, mapping = aes(x=month,y=children, group = 1))+
  geom_point()+ geom_line()+
  labs(y = "Number of Births Per Month",x="Years")+
  ggtitle("Births Over The Past 20 Years")+
  geom_smooth(se = FALSE)

ggsave("PointChart.png", path = "/Users/williamkopans/Downloads")




library(rjson)

my.JSON <- fromJSON(file="/Users/williamkopans/data.json")

df <- lapply(my.JSON, function(play) # Loop through each "play"
{
  # Convert each group to a data frame.
  # This assumes you have 6 elements each time
  data.frame(matrix(unlist(play), ncol=6, byrow=T))
})

# Now you have a list of data frames, connect them together in
# one single dataframe
df <- do.call(rbind, df)

# Make column names nicer, remove row names
colnames(df) <- names(my.JSON[[1]][[1]])
rownames(df) <- NULL






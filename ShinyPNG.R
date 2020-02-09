library(ggfortify)
library(ggplot2)

Spreadsheet <- read.csv("~/json_playing/data.csv", header = TRUE)

DataS <- Spreadsheet

ggplot(data = DataS, mapping = aes(x= month, y=number))+
  geom_col()+
  labs(y = " ",x="")

ggsave("ColChart.png", path = "/Users/williamkopans/Downloads")

ggplot(data= DataS, mapping = aes(x= month,y=number, year = 1, group = 1))+
  geom_line()+
  labs(y = " ",x="")

ggsave("LineChart.png", path = "/Users/williamkopans/Downloads")

ggplot(data= DataS, mapping = aes(x=month,y=number, year = 1, group = 1))+
  geom_point()+ geom_line()+
  labs(y = "",x="")+
  geom_smooth(se = FALSE)

ggsave("PointChart.png", path = "/Users/williamkopans/Downloads")

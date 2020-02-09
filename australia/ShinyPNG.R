library(ggfortify)
library(ggplot2)

Spreadsheet <- read.csv("~/json_playing/data.csv", header = TRUE)

DataS <- Spreadsheet


ggplot(data = DataS, mapping = aes(x= month, y=number))+
  geom_col(fill="azure3")+
  labs(y = " ",x="")+
  theme_void()+
  theme(panel.background = element_rect(fill = 'dark slate gray'))


ggsave("ColChart.png", path = "/Users/williamkopans/Downloads")


ggplot(data= DataS, mapping = aes(x= month,y=number, year = 1, group = 1))+
  geom_line(color="white")+
  labs(y = " ",x="")+
  theme_void()+
  theme(panel.background = element_rect(fill = 'dark slate gray'))


ggsave("LineChart.png", path = "/Users/williamkopans/Downloads")



ggplot(data= DataS, mapping = aes(x=month,y=number, year = 1, group = 1))+
  geom_point(color = "white")+
  geom_line(color = "white")+
  labs(y = "",x="")+
  geom_smooth(se = FALSE, color="dodgerblue")+
  theme(panel.background = element_rect(fill = 'dark slate gray'),
        panel.grid.major = element_blank(),
        panel.grid.minor = element_blank())


ggsave("PointChart.png", path = "/Users/williamkopans/Downloads")




library(scales)
ggplot(data=DataS, aes(x="",y=number, fill = month))+
  geom_bar(width = 1, stat = "identity")+
  coord_polar("y", start=0)+
  theme_void()+
  theme(panel.background = element_rect(fill = 'dark slate gray'))


ggsave("PieChart.png", path = "/Users/williamkopans/Downloads")





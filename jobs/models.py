from django.db import models

# Create your models here.


class Job(models.Model):
    employer = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    summary = models.CharField(max_length=400)
    from_date = models.DateTimeField()
    to_date = models.DateTimeField()
    # To be used in possible modal
    description = models.TextField()
    # Not sure about showing image yet, but DB will have it
    image = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.position

    # def summary(self):
    #     max_words = 20
    #     summarized = self.body.split(" ")
    #     return " ".join(summarized[:max_words]) + "..."

    def from_date_pretty(self):
        return self.from_date.strftime("%b-%d-%Y")

    def to_date_pretty(self):
        return self.to_date.strftime("%b-%d-%Y")

class Rapper:
    def __init__(self, name, origin, top_album):
        self.name = name
        self.origin = origin
        self.top_album = top_album

    def perform(self):
        return f"{self.name} исполнит свой хит из альбома {self.top_album}!"

    def get_bio(self):
        return f"Артист: {self.name} родом из {self.origin}. Лучший альбом: {self.top_album}."

    def __str__(self):
        return f"Артист: {self.name}"

class ConsciousRapper(Rapper):
    def __init__(self, name, origin, top_album, lyrical_complexity):
        super().__init__(name, origin, top_album)
        self.lyrical_complexity = lyrical_complexity

    def perform(self):
        return f"{self.name} данный артист силен своей лирикой, ее оценивают на: {self.lyrical_complexity}/10."

    def won_grammy(self, won):
        if won:
            return f"{self.name} забрал Грэмми за свой альбом - {self.top_album}."
        else:
            return f"{self.name} не забрал Грэмми."

class TrapArtist(Rapper):
    def __init__(self, name, origin, top_album, adlib):
        super().__init__(name, origin, top_album)
        self.adlib = adlib

    def perform(self):
        return f"{self.name} юзает такой эдлиб {self.adlib}!"

    def jump_into_crowd(self):
        return f"{self.name} сияяяя фуээээх"
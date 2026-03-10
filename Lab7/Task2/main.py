from models import Rapper, ConsciousRapper, TrapArtist

def main():
    kendrick = ConsciousRapper(
        name="Kendrick Lamar", 
        origin="Compton", 
        top_album="GKMC.", 
        lyrical_complexity=10
    )
    carti = TrapArtist(
        name="Playboi Carti", 
        origin="Atlanta", 
        top_album="I AM MUSIC", 
        adlib="SCHYEA"
    )

    artists = [kendrick, carti]

    for artist in artists:
        print(f"Общая инфа: {artist}")
        print(artist.get_bio())
        print(artist.perform()) 
        
        if isinstance(artist, ConsciousRapper):
            print(artist.won_grammy(True))
        elif isinstance(artist, TrapArtist):
            print(artist.jump_into_crowd())
            

if __name__ == "__main__":
    main()
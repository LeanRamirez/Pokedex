import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Pokemon} from '../../../domain/entities/Pokemon';
import {Card, Text} from 'react-native-paper';
import {FadeInmage} from '../UI/FadeInImage';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({pokemon}: Props) {
  return (
    <Card style={[styles.cardContainer, {backgroundColor: pokemon.color}]}>
      <Text style={styles.name} variant="bodyLarge" lineBreakMode="middle">
        {pokemon.name}
        {'\n#' + pokemon.id}
      </Text>
      {/* pokeball background image */}
      <View style={styles.pokeballContainer}>
        <Image
          source={require('../../../assets/pokeball-light.png')}
          style={styles.pokeball}
        />
      </View>
      {/* pokemon image */}

      <FadeInmage uri={pokemon.avatar} style={styles.pokemonImage} />

      {/* types */}

      <Text style={[styles.name, {marginTop: 35}]}>{pokemon.types[0]}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    flex: 0.5,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    color: 'white',
    top: 10,
    left: 10,
  },
  pokeball: {
    width: 100,
    height: 100,
    right: -25,
    top: -25,
    opacity: 0.4,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -15,
    top: -30,
  },
  pokeballContainer: {
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',

    overflow: 'hidden',
    opacity: 0.5,
  },
});

import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function FlexScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
            <Text style={styles.caja1}>Caja 4</Text>
            <Text style={styles.caja2}>Caja 5</Text>
            <Text style={styles.caja3}>Caja 6</Text>
            <Text style={styles.caja1}>Caja 7</Text>
            <Text style={styles.caja2}>Caja 8</Text>
            <Text style={styles.caja3}>Caja 9</Text>
            <Text style={styles.caja3}>Caja 10</Text>
            <Text style={styles.caja1}>Caja 11</Text>
            <Text style={styles.caja2}>Caja 12</Text>
            <Text style={styles.caja3}>Caja 13</Text>
            <Text style={styles.caja1}>Caja 14</Text>
            <Text style={styles.caja2}>Caja 15</Text>
            <Text style={styles.caja3}>Caja 16</Text>
            <Text style={styles.caja1}>Caja 17</Text>
            <Text style={styles.caja2}>Caja 18</Text>
            <Text style={styles.caja3}>Caja 19</Text>
            <Text style={styles.caja3}>Caja 20</Text>
            <Text style={styles.caja1}>Caja 21</Text>
            <Text style={styles.caja2}>Caja 22</Text>
            <Text style={styles.caja3}>Caja 23</Text>
            <Text style={styles.caja1}>Caja 24</Text>
            <Text style={styles.caja2}>Caja 25</Text>
            <Text style={styles.caja3}>Caja 26</Text>
            <Text style={styles.caja1}>Caja 27</Text>
            <Text style={styles.caja2}>Caja 28</Text>
            <Text style={styles.caja3}>Caja 29</Text>
            <Text style={styles.caja3}>Caja 30</Text>        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-start',
        backgroundColor: '#39B2E6',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
        
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30, 
    },
});

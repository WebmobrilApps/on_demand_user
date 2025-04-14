import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    DimensionValue,
} from 'react-native';
import imagePaths from '../../../assets/images';
import StarRating from 'react-native-star-rating-widget';
import { Fonts, SF, SH, SW } from '../../../utils';
import { VectoreIcons } from '../../../component';

interface RatingBreakdown {
    star: number;
    percent: string | number | DimensionValue;
}

interface Review {
    id: number;
    name: string;
    date: string;
    rating: number;
    comment: string;
    likes: number;
    replies: number;
    verified: boolean;
    reply?: string;
}

const ratingsBreakdown: RatingBreakdown[] = [
    { star: 5, percent: '75%' },
    { star: 4, percent: '21%' },
    { star: 3, percent: '2%' },
    { star: 2, percent: '1%' },
    { star: 1, percent: '<1%' },
];

const reviews: Review[] = [
    {
        id: 1,
        name: 'Guy Hawkins',
        date: '1 week ago',
        rating: 4,
        comment:
            "Lorem ipsum dolor sit amet consectetur. Gravida nulla quis ultrices in nununc aliquam lacus. Nunc lorem nulla ullamcorper nunc pulvinar erat mi tempor facilisi. Egestas consectetur orci libero faucibus in platea habitant etiam.. Arcu etiam ornare bibendum ornare duis enim..",
        likes: 10,
        replies: 2,
        verified: true,
        reply: 'Thank you so much! 🤍',
    },
    {
        id: 2,
        name: 'Guy Hawkins',
        date: '1 week ago',
        rating: 5,
        comment:
        "Lorem ipsum dolor sit amet consectetur. Gravida nulla quis ultrices in nununc aliquam lacus. Nunc lorem nulla ullamcorper nunc pulvinar erat mi tempor facilisi. Egestas consectetur orci libero faucibus in platea habitant etiam.. Arcu etiam ornare bibendum ornare duis enim..",
        likes: 4,
        replies: 1,
        verified: true,
    },
    {
        id: 3,
        name: 'Guy Hawkins',
        date: '1 week ago',
        rating: 5,
        comment:
        "Lorem ipsum dolor sit amet consectetur. Gravida nulla quis ultrices in nununc aliquam lacus. Nunc lorem nulla ullamcorper nunc pulvinar erat mi tempor facilisi. Egestas consectetur orci libero faucibus in platea habitant etiam.. Arcu etiam ornare bibendum ornare duis enim..",
        likes: 4,
        replies: 1,
        verified: true,
    },
];

const Reviews: React.FC = () => {

    const renderItem = ({ item }: { item: Review }) => (
        <View style={styles.reviewItem}>
            <View style={styles.userRow}>
                <Image
                    source={imagePaths.barber2}
                    style={styles.avatar}
                />
                <View style={styles.nameRow}>
                    <View style={styles.usrNameDateContainer}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.dotText}> . </Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <StarRating
                        starStyle={styles.starStyleForUser}
                        onChange={() => { }}
                        starSize={SF(10)}
                        rating={3.5}
                    />
                </View>
                {item.verified && (
                    <Text style={styles.verifiedUser}>
                        Verified User <VectoreIcons name='checksquare' icon='AntDesign' size={SF(10)} color='green'/> 
                    </Text>
                )}
            </View>


            <Text style={styles.comment}>{item.comment}</Text>

             <View style={styles.actionRow}>
                <Text style={styles.actionText}>
                    <VectoreIcons name='thumbs-up' icon='Feather' size={SF(9)}/>  {item.likes}
                </Text>
                <Text style={[styles.actionText, { marginLeft: 16 }]}>
                <VectoreIcons name='thumbs-down' icon='Feather' size={SF(9)}/>  {item.replies}
                </Text>
                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                    <Text style={styles.reportText}>Report <VectoreIcons name='flag' icon='Ionicons' size={SF(9)}/></Text>
                </TouchableOpacity>
            </View>  

            {item.reply && (
                <View style={styles.replyBox}>
                    <Text style={styles.replyTitle}>WM Barbershop</Text>
                    <Text style={styles.replyDate}>on March 20th</Text>
                    <Text style={styles.replyText}>{item.reply}</Text>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                <View style={styles.ratingSummary}>
                    <Text style={styles.ratingNumber}>4.8</Text>
                    <StarRating
                        starStyle={styles.starStyle}
                        onChange={() => { }}
                        starSize={SF(12)}
                        rating={3.5}
                    />
                    <Text style={styles.averageText}>Coarse Rating</Text>
                </View>
                <View style={styles.breakdownContainer}>
                    {ratingsBreakdown.map((item, index) => (
                        <View key={index} style={styles.breakdownRow}>
                            <StarRating
                                starStyle={{ marginHorizontal: 0.5 }}
                                onChange={() => { }}
                                starSize={SF(14)}
                                rating={item.star}
                            />
                            <Text style={{ marginHorizontal: SW(10), fontSize: SF(9), color: "#1D2026", fontFamily: Fonts.MEDIUM }}>{item.star}</Text>
                            <View style={styles.barBackground}>
                                <View style={[styles.barFill, { width: item.percent }]} />
                            </View>
                            <Text style={{ marginLeft: SW(10), fontSize: SF(9), color: "#1D2026", fontFamily: Fonts.MEDIUM }}>{item.percent}</Text>
                        </View>
                    ))}
                </View>
            </View>


            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 30 }}
            />
        </View>
    );
};

export default Reviews;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: SH(25),
    },
    leftSideRatingContaine: {
    },
    starStyle: {
        marginHorizontal: 0,
        marginTop: 6
    },
    ratingSummary: {
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#C4C4C439',
        borderWidth: 0.6,
        borderColor: '#C4C4C450',
        paddingVertical: SW(12),
        paddingHorizontal: SW(15)
    },
    ratingNumber: {
        fontSize: SF(18.8),
        fontFamily: Fonts.SEMI_BOLD,
        color: '#1D2026',
    },
    averageText: {
        fontSize: SF(7),
        color: '#1D2026',
        marginTop: 4,
        fontFamily: Fonts.MEDIUM,
    },
    breakdownContainer: {
        marginBottom: 20,
        marginLeft: SW(10),
    },
    breakdownRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        paddingRight: SW(80)
    },
    barBackground: {
        height: 6,
        width: '40%',
        backgroundColor: '#9BC5D1',
        overflow: 'hidden',
    },
    barFill: {
        height: 6,
        backgroundColor: '#378CA4',
    },
    reviewItem: {
        paddingVertical: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    userRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    avatar: {
        height: SF(28),
        width: SF(28),
        borderRadius: SF(14),
        backgroundColor: '#ccc',
        marginRight: SF(6),
    },
    nameRow: {
        flex: 1,
    },
    usrNameDateContainer:{ flexDirection: "row", alignItems: "center" },
    userName: {
        fontFamily: Fonts.MEDIUM,
        fontSize: SF(12),
    },
    dateText: {
        fontSize: SF(8),
        color: '#6E7485',
        fontFamily: Fonts.REGULAR
    },
    verifiedUser: {
        fontSize: SF(8),
        color: '#6E7485',
        fontFamily: Fonts.REGULAR,
    },
    dotText: {
        fontSize: SF(14),
        color: '#6E7485',
        fontFamily: Fonts.BOLD,
        marginTop:-SH(5)
    },
    starStyleForUser: {
        marginHorizontal: 0,
    },
     
    starRow: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    comment: {
        fontSize: SF(8),
        marginVertical:SH(4),
        color:'#4E5566'
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    actionText: {
        fontSize: SF(9),
        color: '#3D3D3D',
        backgroundColor:'#F0F0F0',
        paddingHorizontal:SW(7),
        paddingVertical:SH(4),
        borderRadius:4
    },
    reportText: {
        fontSize: SF(9),
        fontFamily:Fonts.REGULAR,
        color: '#4E5566',
    },
    replyBox: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        marginTop: 8,
        borderRadius: 6,
    },
    replyTitle: {
        fontWeight: '600',
        fontSize: 13,
    },
    replyDate: {
        fontSize: 10,
        color: 'gray',
    },
    replyText: {
        fontSize: 12,
        marginTop: 4,
    },
});

import { FlatList, FlatListProps } from 'react-native';
import React from 'react';
import ReviewContainer, {
    ReviewDataPropType,
} from '../container/ReviewContainer';

type ReviewSectionProps = Omit<
    FlatListProps<ReviewDataPropType>,
    'data' | 'renderItem'
> & { reviewData: ReviewDataPropType[] };

const ReviewSection = ({ reviewData, ...rest }: ReviewSectionProps) => {
    return (
        <FlatList
            {...rest}
            data={reviewData}
            keyExtractor={item => item.id ?? ''}
            renderItem={({ item }) => <ReviewContainer data={item} />}
            contentContainerStyle={{
                gap: 10,
                paddingVertical: 10,
                marginHorizontal:15,
                paddingBottom:"30%"
            }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default ReviewSection;

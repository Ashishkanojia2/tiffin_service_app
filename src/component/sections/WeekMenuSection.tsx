import { ScrollView} from 'react-native'
import React from 'react'
import MenuContainer from '../container/MenuContainer';
import { useMealStore } from '../../store/mealListStore';
import { MealListResponseProps } from '../../types/ApiResponseType';
const WeekMenuSection = () => {
    const { mealList } = useMealStore()
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={[{ gap: 10, marginTop: 10, paddingBottom: "30%", paddingHorizontal: 15 }]}>
            {
                Array.isArray(mealList) && mealList.map((item: MealListResponseProps) => (
                    <MenuContainer key={item._id} data={item} />
                ))
            }
        </ScrollView>
    )
}
export default WeekMenuSection;
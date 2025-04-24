import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Checkbox, Spacing, VectoreIcons } from '../../../component';
import { Colors, SF, SH, SW } from '../../../utils';
import SubCategoryItem from './SubCategoryItem';

// Interface for props
interface CategoryItemProps {
  category: {
    title: string;
    categoryId: number;
    subCategories: Array<{
      id: string;
      name: string;
      count: number;
      selected: boolean;
    }>;
  };
  selectedCat: number[];
  openedCat: number[];
  selectedSubcat: string[];
  onChangeCatCheck: (categoryId: number) => void;
  onToggleDropdown: (categoryId: number) => void;
  onChangeSubcatCheck: (subcatId: string, categoryId: number) => void;
}

const CategoryItem: FC<CategoryItemProps> = ({
  category,
  selectedCat,
  openedCat,
  selectedSubcat,
  onChangeCatCheck,
  onToggleDropdown,
  onChangeSubcatCheck,
}) => {
  return (
    <>
      <View style={styles.categoryContainer}>
        <Checkbox
          checked={selectedCat.includes(category.categoryId)}
          size={SW(16)}
          color={Colors.themeColor}
          onChange={() => onChangeCatCheck(category.categoryId)}
          label=""
        />
        <Spacing horizontal space={SW(8)} />
        <Text style={styles.title}>{category.title}</Text>
        <TouchableOpacity
          style={styles.dropdownIcon}
          onPress={() => onToggleDropdown(category.categoryId)}
        >
          <VectoreIcons
            icon="AntDesign"
            name={openedCat.includes(category.categoryId) ? 'caretup' : 'caretdown'}
            size={SF(14)}
            color={Colors.themeColor}
          />
        </TouchableOpacity>
      </View>
      {openedCat.includes(category.categoryId) &&
        category.subCategories.map((subcat) => (
          <SubCategoryItem
            key={subcat.id}
            subcat={subcat}
            categoryId={category.categoryId}
            selectedSubcat={selectedSubcat}
            onChangeSubcatCheck={onChangeSubcatCheck}
          />
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: SW(20),
    paddingVertical: SH(6),
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: SF(12),
    color: '#407C95',
    fontFamily: 'MEDIUM',
  },
  dropdownIcon: {
    paddingHorizontal: SW(5),
  },
});

export default CategoryItem;
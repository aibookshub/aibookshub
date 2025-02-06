import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationProp, RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
    Books: { subCateId: string; categoryName: string };
    BookDetail: { book: { 
        id: string;  
        title: string;  // ✅ Replace `name` with `title`
        cover: string;  
        author: string;  
        publisher: string;  
        summary: string;  
        previewLink: string;  
        isbn_13: string;  
    }};
};

// Home
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
export interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

// SubCategory
type SubcategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, "Category">;
type SubcategoryScreenRouteProp = RouteProp<RootStackParamList, "Category">;

export interface SubCateProps {
    navigation: SubcategoryScreenNavigationProp;
    route: SubcategoryScreenRouteProp;
}

export interface SubCateItem {
    id: string;
    cat1Id: string;
    name: string;
    cover: string;
}

// booklist
type BooklistRouteProp = RouteProp<RootStackParamList, "Books">;
type BooklistNavigationProp = NavigationProp<RootStackParamList, "Books">;

export type BooklistProps = {
    route: BooklistRouteProp;
    navigation: BooklistNavigationProp;
};

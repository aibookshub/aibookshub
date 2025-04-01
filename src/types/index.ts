import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from '@react-navigation/drawer';


export type RootStackParamList = {
    Home: undefined;
    Category: { categoryId: string; categoryName: string };
    BookList: { subCateId: string; categoryName: string };
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

// Drawer
export interface DrawerProps {
    navigation: DrawerNavigationProp<any>;
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
    name: string;
    cover: string;
}

// booklist
type BooklistRouteProp = RouteProp<RootStackParamList, "BookList">;
type BooklistNavigationProp = NavigationProp<RootStackParamList, "BookList">;

export type BooklistProps = {
    route: BooklistRouteProp;
    navigation: BooklistNavigationProp;
};

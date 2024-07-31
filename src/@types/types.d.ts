///types.d.ts
import { ReactNode } from "react";

export type LoginUser = {
    email: string;
    password: string;
};

export type IName = {
    first: string;
    middle?: string;
    last: string;
};


export type RegisterUser = {
    [x: string]: any;
    title: ReactNode;
    subtitle: ReactNode;
    name: IName
    phone: string;
    email: string;
    password: string;
    address: {
        state?: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
    };
    isBusiness: boolean;
};


export type IPatient = {
    [x: string]: any;
    _id: string;
    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    startTime: string;
    endTime: string;
    features: string;
    meetingType: string;
    dayStart: string;
    dayEnd: string;
    url: string;
    userActivity: string;
    comments: string;
    treatmentDuration?: number;
    comments: CommentType[];
    createdAt: string;
    __v: number;

};


export type CreateTypePatient = {
    [x: string]: any;
    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    startTime: string;
    endTime: string;
    features: string;
    meetingType: string;
    dayStart: string;
    dayEnd: string;
    url: string;
    userActivity: string;
    comments: string;
    treatmentDuration?: number;

};


export type CommentType = {
    [x: string]: any;
    user: {
        _id: string;
        name: {
            first: string;
        };
        image?: {
            url: string;
        };
        email: string;
    };
    _doc: {
        _id: string;
        userId: string;
        patientId: string;
        text: string;
        createdAt: string;
    };
};

export type ErrorType = {
    status: number;
    message: string
    details: string;
};

export type JwtDecodeType = {
    _id: string;
    iat: number;
    exp: number;
    isBusiness: boolean;
    isAdmin: boolean;

};

export type SidebarType = {
    patients: CreateTypePatient[];
    onFilterChange: (filtered: CreateTypePatient[]) => void;
    showAdvancedSearch: boolean;
    setShowAdvancedSearch: React.Dispatch<React.SetStateAction<boolean>>;
    onMergePatients: () => void;
};

export type SearchFiltersType = {

    patients: CreateTypePatient[];
    onFilterChange: (filtered: CreateTypePatient[]) => void;
    showAdvancedSearch: boolean;
    setShowAdvancedSearch: React.Dispatch<React.SetStateAction<boolean>>;
};



export type PatientListType = {

    groupedPatients: Record<string, CreateTypePatient[]>;
    selectedPatients: CreateTypePatient[];
    onCheckboxChange: (record: CreateTypePatient) => void;
};


export type ChartsType = {

    treatmentDurationData: {
        labels: string[];
        datasets: any[];
    };
    pastYearData: {
        labels: string[];
        datasets: any[];
    };
    treatmentDurationOptions: any;
    pastYearOptions: any;
};

export type PatientRecordType = {

    record: CreateTypePatient;
    onCheckboxChange: (record: CreateTypePatient) => void;
    isChecked: boolean;
};


export type MergedPatientDisplayType = {
    patient: Partial<CreateTypePatient> | null;
};


export type FilterMergedPatientsType = {
    patients: CreateTypePatient[];
    onFilterChange: (filteredPatients: CreateTypePatient[]) => void;
};


export type UserActivityChartType = {

    userActivity: string[];
};

export type MeetingTypeChartType = {

    meetingTypes: string[];
};


export type AuthContextType = {
    isLoggedIn: boolean;
    isBusiness: boolean;
    isAdmin: boolean;
    login: (jwt: string) => void;
    logout: () => void;
};


export type FCC = ({ children: ReactNode }) => ReactNode
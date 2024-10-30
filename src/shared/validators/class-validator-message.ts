import {
  Allow as _Allow,
  ArrayContains as _ArrayContains,
  ArrayMaxSize as _ArrayMaxSize,
  ArrayMinSize as _ArrayMinSize,
  ArrayNotContains as _ArrayNotContains,
  ArrayNotEmpty as _ArrayNotEmpty,
  ArrayUnique as _ArrayUnique,
  ArrayUniqueIdentifier,
  Contains as _Contains,
  Equals as _Equals,
  IsAlpha as _IsAlpha,
  IsAlphanumeric as _IsAlphanumeric,
  IsArray as _IsArray,
  IsAscii as _IsAscii,
  IsBase32 as _IsBase32,
  IsBase64 as _IsBase64,
  IsBIC as _IsBIC,
  IsBoolean as _IsBoolean,
  IsBooleanString as _IsBooleanString,
  IsBtcAddress as _IsBtcAddress,
  IsByteLength as _IsByteLength,
  IsCreditCard as _IsCreditCard,
  IsCurrency as _IsCurrency,
  IsDataURI as _IsDataURI,
  IsDate as _IsDate,
  IsDateString as _IsDateString,
  IsDecimal as _IsDecimal,
  IsDefined as _IsDefined,
  IsDivisibleBy as _IsDivisibleBy,
  IsEAN as _IsEAN,
  IsEmail as _IsEmail,
  IsEmpty as _IsEmpty,
  IsEnum as _IsEnum,
  IsEthereumAddress as _IsEthereumAddress,
  IsFirebasePushId as _IsFirebasePushId,
  IsFQDN as _IsFQDN,
  IsFullWidth as _IsFullWidth,
  IsHalfWidth as _IsHalfWidth,
  IsHash as _IsHash,
  IsHexadecimal as _IsHexadecimal,
  IsHexColor as _IsHexColor,
  IsHSL as _IsHSL,
  IsIBAN as _IsIBAN,
  IsIdentityCard as _IsIdentityCard,
  IsIn as _IsIn,
  IsInstance as _IsInstance,
  IsInt as _IsInt,
  IsIP as _IsIP,
  IsIpVersion,
  IsISBN as _IsISBN,
  IsISBNVersion,
  IsISIN as _IsISIN,
  IsISO31661Alpha2 as _IsISO31661Alpha2,
  IsISO31661Alpha3 as _IsISO31661Alpha3,
  IsISO8601 as _IsISO8601,
  IsISRC as _IsISRC,
  IsISSN as _IsISSN,
  IsJSON as _IsJSON,
  IsJWT as _IsJWT,
  IsLatitude as _IsLatitude,
  IsLatLong as _IsLatLong,
  IsLocale as _IsLocale,
  IsLongitude as _IsLongitude,
  IsLowercase as _IsLowercase,
  IsMACAddress as _IsMACAddress,
  IsMagnetURI as _IsMagnetURI,
  IsMilitaryTime as _IsMilitaryTime,
  IsMimeType as _IsMimeType,
  IsMobilePhone as _IsMobilePhone,
  IsMongoId as _IsMongoId,
  IsMultibyte as _IsMultibyte,
  IsNegative as _IsNegative,
  IsNotEmpty as _IsNotEmpty,
  IsNotEmptyObject as _IsNotEmptyObject,
  IsNotIn as _IsNotIn,
  IsNumber as _IsNumber,
  IsNumberOptions,
  IsNumberString as _IsNumberString,
  IsObject as _IsObject,
  IsOctal as _IsOctal,
  IsOptional as _IsOptional,
  IsPassportNumber as _IsPassportNumber,
  IsPhoneNumber as _IsPhoneNumber,
  IsPort as _IsPort,
  IsPositive as _IsPositive,
  IsPostalCode as _IsPostalCode,
  IsRFC3339 as _IsRFC3339,
  IsRgbColor as _IsRgbColor,
  IsSemVer as _IsSemVer,
  IsString as _IsString,
  IsStrongPassword as _IsStrongPassword,
  IsStrongPasswordOptions,
  IsSurrogatePair as _IsSurrogatePair,
  IsTimeZone as _IsTimeZone,
  IsUppercase as _IsUppercase,
  IsUrl as _IsUrl,
  IsUUID as _IsUUID,
  IsVariableWidth as _IsVariableWidth,
  Length as _Length,
  Matches as _Matches,
  Max as _Max,
  MaxDate as _MaxDate,
  MaxLength as _MaxLength,
  Min as _Min,
  MinDate as _MinDate,
  MinLength as _MinLength,
  NotContains as _NotContains,
  NotEquals as _NotEquals,
  ValidationArguments,
  ValidationOptions
} from 'class-validator'
import { CountryCode } from 'libphonenumber-js'
import * as ValidatorJS from 'validator'

export const IsTimeZone = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsTimeZone({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDefined = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsDefined({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsOptional = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsOptional({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Equals = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _Equals({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const NotEquals = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _NotEquals({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsEmpty = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsEmpty({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNotEmpty = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsNotEmpty({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsIn = (values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsIn(values, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNotIn = (values: readonly any[], validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsNotIn(values, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBoolean = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsBoolean({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDate = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsDate({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsString = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsString({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNumber = (options?: IsNumberOptions, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsNumber(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsInt = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsInt({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsArray = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsArray({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsEnum = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsEnum({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDivisibleBy = (num: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsDivisibleBy(num, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsPositive = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsPositive({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNegative = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsNegative({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Min = (minValue: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _Min(minValue, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Max = (maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _Max(maxValue, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const MinDate = (date: Date, validationOptions?: ValidationOptions): PropertyDecorator =>
  _MinDate(date, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const MaxDate = (date: Date, validationOptions?: ValidationOptions): PropertyDecorator =>
  _MaxDate(date, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBooleanString = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsBooleanString({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDateString = (
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsDateString(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNumberString = (
  options?: ValidatorJS.IsNumericOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsNumberString(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Contains = (seed: string, validationOptions?: ValidationOptions): PropertyDecorator =>
  _Contains(seed, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const NotContains = (seed: string, validationOptions?: ValidationOptions): PropertyDecorator =>
  _NotContains(seed, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsAlpha = (locale?: ValidatorJS.AlphaLocale, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsAlpha(locale, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsAlphanumeric = (
  locale?: ValidatorJS.AlphaLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsAlphanumeric(locale, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDecimal = (
  options?: ValidatorJS.IsDecimalOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsDecimal(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsAscii = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsAscii({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBase32 = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsBase32({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBase64 = (
  options?: ValidatorJS.IsBase64Options,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsBase64(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsIBAN = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsIBAN({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBIC = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsBIC({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsByteLength = (min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsByteLength(min, max, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsCreditCard = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsCreditCard({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsCurrency = (
  options?: ValidatorJS.IsCurrencyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsCurrency(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsEthereumAddress = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsEthereumAddress({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsBtcAddress = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsBtcAddress({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsDataURI = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsDataURI({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsEmail = (
  options?: ValidatorJS.IsEmailOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsEmail(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsFQDN = (options?: ValidatorJS.IsFQDNOptions, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsFQDN(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsFullWidth = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsFullWidth({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsHalfWidth = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsHalfWidth({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsVariableWidth = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsVariableWidth({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsHexColor = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsHexColor({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsHSL = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsHSL({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsRgbColor = (includePercentValues?: boolean, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsRgbColor(includePercentValues, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsIdentityCard = (
  locale?: ValidatorJS.IdentityCardLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsIdentityCard(locale, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsPassportNumber = (countryCode: string, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsPassportNumber(countryCode, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsPostalCode = (
  locale?: 'any' | ValidatorJS.PostalCodeLocale,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsPostalCode(locale, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsHexadecimal = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsHexadecimal({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsOctal = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsOctal({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMACAddress = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMACAddress({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsIP = (version?: IsIpVersion, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsIP(version, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsPort = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsPort({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISBN = (version?: IsISBNVersion, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISBN(version, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsEAN = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsEAN({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISIN = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISIN({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISO8601 = (
  options?: ValidatorJS.IsISO8601Options,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsISO8601(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsJSON = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsJSON({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsJWT = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsJWT({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsObject = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsObject({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsNotEmptyObject = (
  options?: {
    nullable?: boolean
  },
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsNotEmptyObject(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsLowercase = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsLowercase({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsLatLong = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsLatLong({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsLatitude = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsLatitude({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsLongitude = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsLongitude({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMobilePhone = (
  locale?: ValidatorJS.MobilePhoneLocale,
  options?: ValidatorJS.IsMobilePhoneOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsMobilePhone(locale, options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISO31661Alpha2 = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISO31661Alpha2({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISO31661Alpha3 = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISO31661Alpha3({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsLocale = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsLocale({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsPhoneNumber = (region?: CountryCode, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsPhoneNumber(region, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMongoId = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMongoId({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMultibyte = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMultibyte({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsSurrogatePair = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsSurrogatePair({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsUrl = (options?: ValidatorJS.IsURLOptions, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsUrl(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMagnetURI = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMagnetURI({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsUUID = (version?: ValidatorJS.UUIDVersion, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsUUID(version, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsFirebasePushId = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsFirebasePushId({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsUppercase = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsUppercase({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Length = (min: number, max?: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _Length(min, max, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const MinLength = (min: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _MinLength(min, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const MaxLength = (max: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _MaxLength(max, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Matches = (pattern: RegExp, validationOptions?: ValidationOptions): PropertyDecorator =>
  _Matches(pattern, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMilitaryTime = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMilitaryTime({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsHash = (algorithm: string, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsHash(algorithm, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsMimeType = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsMimeType({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsSemVer = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsSemVer({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISSN = (options?: ValidatorJS.IsISSNOptions, validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISSN(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsISRC = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsISRC({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsRFC3339 = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _IsRFC3339({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsStrongPassword = (
  options?: IsStrongPasswordOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsStrongPassword(options, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayContains = (values: any[], validationOptions?: ValidationOptions): PropertyDecorator =>
  _ArrayContains(values, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayNotContains = (values: any[], validationOptions?: ValidationOptions): PropertyDecorator =>
  _ArrayNotContains(values, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayNotEmpty = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _ArrayNotEmpty({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayMinSize = (min: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _ArrayMinSize(min, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayMaxSize = (max: number, validationOptions?: ValidationOptions): PropertyDecorator =>
  _ArrayMaxSize(max, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const ArrayUnique = <T = any>(
  identifierOrOptions?: ArrayUniqueIdentifier<T> | ValidationOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _ArrayUnique(identifierOrOptions, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const IsInstance = (
  targetType: new (...args: any[]) => any,
  validationOptions?: ValidationOptions
): PropertyDecorator =>
  _IsInstance(targetType, {
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })
export const Allow = (validationOptions?: ValidationOptions): PropertyDecorator =>
  _Allow({
    ...validationOptions,
    message: (args: ValidationArguments) => JSON.stringify(args.constraints)
  })

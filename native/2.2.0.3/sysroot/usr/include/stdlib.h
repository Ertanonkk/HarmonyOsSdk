/*
 * Copyright (C) 2008 The Android Open Source Project
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 * FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 * OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

#ifndef _STDLIB_H
#define _STDLIB_H

#include <alloca.h>
#include <bits/wait.h>
#include <malloc.h>
#include <stddef.h>
#include <sys/cdefs.h>
#include <xlocale.h>

__BEGIN_DECLS

#define EXIT_FAILURE 1
#define EXIT_SUCCESS 0

__noreturn void abort(void);
__noreturn void exit(int __status);
__noreturn void _Exit(int __status);

int atexit(void (*__fn)(void));

int at_quick_exit(void (*__fn)(void));
void quick_exit(int __status) __noreturn;

char* getenv(const char* __name);
int putenv(char* __assignment);
int setenv(const char* __name, const char* __value, int __overwrite);
int unsetenv(const char* __name);
int clearenv(void);

char* mkdtemp(char* __template);
char* mktemp(char* __template) __attribute__((deprecated("mktemp is unsafe, use mkstemp or tmpfile instead")));

int mkostemp64(char* __template, int __flags);
int mkostemp(char* __template, int __flags);
int mkostemps64(char* __template, int __suffix_length, int __flags);
int mkostemps(char* __template, int __suffix_length, int __flags);
int mkstemp64(char* __template);
int mkstemp(char* __template);
int mkstemps64(char* __template, int __flags);
int mkstemps(char* __template, int __flags);

long strtol(const char* __s, char** __end_ptr, int __base);
long long strtoll(const char* __s, char** __end_ptr, int __base);
unsigned long strtoul(const char* __s, char** __end_ptr, int __base);
unsigned long long strtoull(const char* __s, char** __end_ptr, int __base);

int posix_memalign(void** __memptr, size_t __alignment, size_t __size);

void* aligned_alloc(size_t __alignment, size_t __size);

double strtod(const char* __s, char** __end_ptr);
long double strtold(const char* __s, char** __end_ptr);


int atoi(const char* __s) __attribute_pure__;
long atol(const char* __s) __attribute_pure__;
long long atoll(const char* __s) __attribute_pure__;

char* realpath(const char* __path, char* __resolved);
int system(const char* __command);

void* bsearch(const void* __key, const void* __base, size_t __nmemb, size_t __size, int (*__comparator)(const void* __lhs, const void* __rhs));

void qsort(void* __base, size_t __nmemb, size_t __size, int (*__comparator)(const void* __lhs, const void* __rhs));

uint32_t arc4random(void);

#define RAND_MAX 0x7fffffff

int rand_r(unsigned int* __seed_ptr);

double drand48(void);
double erand48(unsigned short __xsubi[3]);
long jrand48(unsigned short __xsubi[3]);
void lcong48(unsigned short __param[7]);
long lrand48(void);
long mrand48(void);
long nrand48(unsigned short __xsubi[3]);
unsigned short* seed48(unsigned short __seed16v[3]);
void srand48(long __seed);

char* initstate(unsigned int __seed, char* __state, size_t __n);
char* setstate(char* __state);

int posix_openpt(int __flags);
char* ptsname(int __fd);
int ptsname_r(int __fd, char* __buf, size_t __n);
int unlockpt(int __fd);

int getsubopt(char** __option, char* const* __tokens, char** __value_ptr);

typedef struct {
  int quot;
  int rem;
} div_t;

div_t div(int __numerator, int __denominator) __attribute_const__;

typedef struct {
  long int quot;
  long int rem;
} ldiv_t;

ldiv_t ldiv(long __numerator, long __denominator) __attribute_const__;

typedef struct {
  long long int quot;
  long long int rem;
} lldiv_t;

lldiv_t lldiv(long long __numerator, long long __denominator) __attribute_const__;

int getloadavg(double __averages[], int __n);


int mblen(const char* __s, size_t __n);
size_t mbstowcs(wchar_t* __dst, const char* __src, size_t __n);
int mbtowc(wchar_t* __wc_ptr, const char* __s, size_t __n);
int wctomb(char* __dst, wchar_t __wc);

size_t wcstombs(char* __dst, const wchar_t* __src, size_t __n);

size_t __ctype_get_mb_cur_max(void);
#define MB_CUR_MAX __ctype_get_mb_cur_max()


int abs(int __x) __attribute_const__;
long labs(long __x) __attribute_const__;
long long llabs(long long __x) __attribute_const__;

float strtof(const char* __s, char** __end_ptr);
double atof(const char* __s) __attribute_pure__;
int rand(void);
void srand(unsigned int __seed);
long random(void);
void srandom(unsigned int __seed);
int grantpt(int __fd);

long long strtoll_l(const char* __s, char** __end_ptr, int __base, locale_t __l);
unsigned long long strtoull_l(const char* __s, char** __end_ptr, int __base, locale_t __l);
long double strtold_l(const char* __s, char** __end_ptr, locale_t __l);

double strtod_l(const char* __s, char** __end_ptr, locale_t __l);
float strtof_l(const char* __s, char** __end_ptr, locale_t __l);

__END_DECLS


#endif